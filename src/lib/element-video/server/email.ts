// "Your element video is ready" email (Resend, same sender as the readings).
// Sends a link to the buyer's video page, not the file: the MP4 (~3-4 MB)
// plays on the page and can be downloaded or shared from there.

import { sendEmail } from '../../readings/server/email'
import { esc } from '../../readings/server/templates/base'

const FROM_ADDRESS = 'Wu Xing Zodiac <readings@wuxingzodiac.me>'

export async function sendElementVideoEmail(to: string, signName: string, pageUrl: string): Promise<void> {
  const subject = `Your ${signName} world is ready`
  const intro = `Your 20-second "Step into your element" video of the ${signName} world is ready.`
  const how = 'Open it to watch with sound, download it, or share it from your phone.'
  const keep = 'Download the video to keep your own copy.'

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#171717">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;padding:28px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#737373">Wu Xing Zodiac</p>
    <h1 style="margin:0 0 16px;font-size:22px">${esc(subject)}</h1>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.5">${esc(intro)} ${esc(how)}</p>
    <p style="margin:20px 0">
      <a href="${esc(pageUrl)}" style="display:inline-block;background:#171717;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:bold">Watch your video</a>
    </p>
    <p style="margin:16px 0 0;font-size:13px;color:#737373">${esc(keep)}</p>
  </div>
  <p style="max-width:560px;margin:12px auto 0;font-size:12px;color:#a3a3a3;text-align:center">
    <a href="https://wuxingzodiac.me" style="color:#a3a3a3">wuxingzodiac.me</a> · Made with AI (Google Genie 4). For entertainment.
  </p>
</body></html>`

  const text = [intro, how, '', pageUrl, '', keep, '', 'wuxingzodiac.me'].join('\n')

  await sendEmail({
    from: FROM_ADDRESS,
    to: [to],
    subject,
    html,
    text,
    reply_to: process.env.SUPPORT_EMAIL || undefined,
  })
}
