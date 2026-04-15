import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    })

    if (existing) {
      if (existing.isSubscribed) {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 }
        )
      } else {
        // Re-subscribe
        await prisma.subscriber.update({
          where: { email },
          data: { isSubscribed: true },
        })
      }
    } else {
      // Create new subscriber
      await prisma.subscriber.create({
        data: { email },
      })
    }

    // Send welcome email
    await sendEmail({
      to: email,
      subject: "Welcome to Beyond Grade 12",
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: sans-serif; line-height: 1.6; color: #2E2E2E; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #0B1F3A; padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F8F6F2; margin: 0;">Beyond Grade 12</h1>
            <p style="color: #C5A46D; margin: 10px 0 0 0; font-style: italic;">Where Ambition Meets Direction</p>
          </div>
          <div style="background-color: #F8F6F2; padding: 40px 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0B1F3A; margin-top: 0;">You're In!</h2>
            <p>Thank you for subscribing to the Beyond Grade 12 newsletter. You'll now receive:</p>
            <ul>
              <li>Expert tips on career planning and university admissions</li>
              <li>Updates on upcoming cohorts and programs</li>
              <li>Exclusive insights from our mentors</li>
              <li>Success stories from our students</li>
            </ul>
            <p>Stay tuned for valuable content that will help you on your journey!</p>
            <p style="color: #0B1F3A; font-weight: bold;">The Beyond Grade 12 Team</p>
          </div>
          <p style="text-align: center; color: #888; font-size: 12px; margin-top: 20px;">
            <a href="#" style="color: #888;">Unsubscribe</a>
          </p>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error processing subscription:", error)
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    )
  }
}
