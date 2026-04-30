import nodemailer from "nodemailer"

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Beyond Grade 12" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo,
    })

    console.log("Email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

// Email templates
export function getLeadNotificationEmail(data: {
  name: string
  email: string
  phone?: string
  grade?: string
  message?: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2E2E2E; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #0B1F3A; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #F8F6F2; margin: 0; font-size: 24px;">New Consultation Request</h1>
      </div>
      
      <div style="background-color: #F8F6F2; padding: 30px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #0B1F3A; margin-top: 0;">Lead Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Name:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><a href="mailto:${data.email}" style="color: #C5A46D;">${data.email}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><a href="tel:${data.phone}" style="color: #C5A46D;">${data.phone}</a></td>
          </tr>
          ` : ''}
          ${data.grade ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Grade:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;">${data.grade}</td>
          </tr>
          ` : ''}
        </table>
        
        ${data.message ? `
        <div style="margin-top: 20px;">
          <strong>Message:</strong>
          <p style="background-color: #FFFFFF; padding: 15px; border-radius: 4px; margin-top: 10px;">${data.message}</p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${data.email}" style="display: inline-block; background-color: #0B1F3A; color: #F8F6F2; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reply to Lead</a>
        </div>
      </div>
      
      <p style="text-align: center; color: #888; font-size: 12px; margin-top: 20px;">
        This is an automated notification from Beyond Grade 12
      </p>
    </body>
    </html>
  `
}

export function getLeadConfirmationEmail(name: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2E2E2E; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #0B1F3A; padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #F8F6F2; margin: 0; font-size: 28px; font-family: Georgia, serif;">Beyond Grade 12</h1>
        <p style="color: #C5A46D; margin: 10px 0 0 0; font-style: italic;">Where Ambition Meets Direction</p>
      </div>
      
      <div style="background-color: #F8F6F2; padding: 40px 30px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #0B1F3A; margin-top: 0;">Thank You, ${name}!</h2>
        
        <p>We've received your consultation request and are excited to connect with you.</p>
        
        <p>A member of our team will reach out within <strong>24 hours</strong> to schedule your free consultation call.</p>
        
        <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #C5A46D;">
          <h3 style="color: #0B1F3A; margin-top: 0; margin-bottom: 10px;">What to Expect:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>A personalized conversation about your goals</li>
            <li>Overview of our Elite Pathway program</li>
            <li>Customized recommendations for your journey</li>
            <li>Answers to all your questions</li>
          </ul>
        </div>
        
        <p>In the meantime, feel free to explore our website or reach out to us:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://wa.me/1234567890" style="display: inline-block; background-color: #25D366; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 5px;">WhatsApp Us</a>
          <a href="mailto:info@beyondgrade12.ca" style="display: inline-block; background-color: #0B1F3A; color: #F8F6F2; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 5px;">Email Us</a>
        </div>
        
        <p style="margin-bottom: 0;">Looking forward to helping you achieve your dreams!</p>
        <p style="color: #0B1F3A; font-weight: bold; margin-top: 5px;">The Beyond Grade 12 Team</p>
      </div>
      
      <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Beyond Grade 12. All rights reserved.</p>
        <p style="margin: 5px 0 0 0;">
          <a href="#" style="color: #888;">Unsubscribe</a> | 
          <a href="#" style="color: #888;">Privacy Policy</a>
        </p>
      </div>
    </body>
    </html>
  `
}
