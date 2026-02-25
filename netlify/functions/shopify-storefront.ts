// ============================================
// SHOPIFY STOREFRONT API PROXY
// Proxies GraphQL queries to Shopify, keeping the
// Storefront Access Token server-side. Adds caching
// headers for Netlify CDN edge caching.
// ============================================

import type { Context } from '@netlify/functions'

const PRODUCTS_QUERY = `
  query AllProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          productType
          tags
          images(first: 5) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                availableForSale
                image {
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
                  }
                  image {
                    url
                    altText
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }
}

export default async (req: Request, _context: Context) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() })
  }

  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN
  const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

  if (!storeDomain || !storefrontToken) {
    return new Response(
      JSON.stringify({ error: 'Shopify not configured', products: [] }),
      { status: 200, headers: corsHeaders() }
    )
  }

  const url = new URL(req.url)
  const action = url.searchParams.get('action') || 'products'

  try {
    if (action === 'products') {
      return await handleProducts(storeDomain, storefrontToken)
    } else if (action === 'cart-create' && req.method === 'POST') {
      return await handleCartCreate(req, storeDomain, storefrontToken)
    } else {
      return new Response(
        JSON.stringify({ error: 'Unknown action' }),
        { status: 400, headers: corsHeaders() }
      )
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Shopify storefront error:', message)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: corsHeaders() }
    )
  }
}

async function shopifyFetch(
  storeDomain: string,
  token: string,
  query: string,
  variables: Record<string, unknown> = {},
): Promise<Record<string, unknown>> {
  const endpoint = `https://${storeDomain}/api/2024-01/graphql.json`

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`)
  }

  return await res.json() as Record<string, unknown>
}

async function handleProducts(
  storeDomain: string,
  token: string,
): Promise<Response> {
  // Fetch up to 250 products (paginated)
  const allProducts: unknown[] = []
  let after: string | null = null
  let hasNextPage = true

  while (hasNextPage && allProducts.length < 250) {
    const data = await shopifyFetch(storeDomain, token, PRODUCTS_QUERY, {
      first: 50,
      after,
    })

    const products = data.data as Record<string, unknown> | undefined
    const productsData = products?.products as Record<string, unknown> | undefined

    if (!productsData) break

    const edges = productsData.edges as Array<Record<string, unknown>> || []
    for (const edge of edges) {
      allProducts.push(edge.node)
    }

    const pageInfo = productsData.pageInfo as Record<string, unknown> | undefined
    hasNextPage = pageInfo?.hasNextPage as boolean || false
    after = pageInfo?.endCursor as string || null
  }

  return new Response(
    JSON.stringify({ products: allProducts }),
    {
      status: 200,
      headers: {
        ...corsHeaders(),
        // Cache for 5 minutes at edge, serve stale for 1 hour
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
        'Netlify-CDN-Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
      },
    }
  )
}

async function handleCartCreate(
  req: Request,
  storeDomain: string,
  token: string,
): Promise<Response> {
  const body = await req.json() as Record<string, unknown>
  const lines = body.lines as Array<Record<string, unknown>> | undefined

  if (!lines || !Array.isArray(lines) || lines.length === 0) {
    return new Response(
      JSON.stringify({ error: 'Cart lines required' }),
      { status: 400, headers: corsHeaders() }
    )
  }

  const data = await shopifyFetch(storeDomain, token, CART_CREATE_MUTATION, { lines })
  const cartCreate = (data.data as Record<string, unknown>)?.cartCreate as Record<string, unknown> | undefined
  const userErrors = cartCreate?.userErrors as Array<Record<string, string>> | undefined

  if (userErrors && userErrors.length > 0) {
    return new Response(
      JSON.stringify({ error: userErrors[0].message }),
      { status: 400, headers: corsHeaders() }
    )
  }

  return new Response(
    JSON.stringify({ cart: cartCreate?.cart }),
    { status: 200, headers: corsHeaders() }
  )
}

export const config = { path: '/api/shopify' }
