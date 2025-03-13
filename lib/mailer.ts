'use server'
import { Feedback } from '@/types/Feedback'
import nodemailer from 'nodemailer'

const { SMTP_APP_PASSWORD, SMPT_APP_EMAIL, PORTFOLIO_OWNER_EMAIl } = process.env
const userLastSent = new Map<string, number>()

export const sendFeedback = async ({ name, email, feedback }: Feedback) => {
  const now = Date.now()
  const lastSent = userLastSent.get(email)

  if (lastSent && now - lastSent < 24 * 60 * 60 * 1000) {
    return {
      success: false,
      message: 'You have already sent feedback today. Try again tomorrow.',
    }
  }

  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMPT_APP_EMAIL,
        pass: SMTP_APP_PASSWORD,
      },
    })

    await transport.sendMail({
      from: PORTFOLIO_OWNER_EMAIl,
      to: email,
      subject: 'Thank you for sending feedback!',
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #333;">Thank You, ${name}! 🎉</h2>
            <p style="font-size: 16px; color: #555;">
              I appreciate you taking the time to share your feedback with me. Your thoughts help me improve and create better experiences.
            </p>
            <blockquote style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #007bff; font-style: italic; color: #333;">
              "${feedback}"
            </blockquote>
            <p style="font-size: 16px; color: #555;">
              If you have any more suggestions or just want to connect, feel free to reach out anytime.
            </p>
            <p style="font-size: 16px; color: #555;">Best regards,</p>
            <p style="font-size: 18px; font-weight: bold; color: #333;">Kevs Dev</p>
          </div>
        `,
    })

    await transport.sendMail({
      from: email,
      to: PORTFOLIO_OWNER_EMAIl,
      subject: `New Feedback from ${name}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #333;">New Feedback Received! 📩</h2>

            <p style="font-size: 16px; color: #555;">
              <strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>)
            </p>

            <h3 style="color: #333; margin-top: 15px;">Message:</h3>
            <blockquote style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #007bff; font-style: italic; color: #333;">
              "${feedback}"
            </blockquote>

            <p style="font-size: 16px; color: #555;">
              You can respond directly to <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${name}</a> if needed.
            </p>

            <p style="font-size: 16px; color: #555; margin-top: 20px;">Best regards,</p>
            <p style="font-size: 18px; font-weight: bold; color: #333;">Kevs Dev</p>
          </div>
        `,
    })

    userLastSent.set(email, now)
    return { success: true, message: '✅ Feedback sent successfully!' }
  } catch (error) {
    console.error(`Sending email failed - Error: ${error}`)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }
}
