'use server'
import { Feedback } from '@/types/Feedback'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendFeedback = async ({ email, name, feedback }: Feedback) => {
  try {
    await resend.emails.send({
      from: 'markkevinromero.work@gmail.com',
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
  } catch (error) {
    console.log(error)
  }
}
