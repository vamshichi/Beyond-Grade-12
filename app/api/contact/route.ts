import { NextRequest, NextResponse } from "next/server"
// import { prisma } from "@/lib/prisma"
import { sendEmail, getLeadNotificationEmail, getLeadConfirmationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, grade, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
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

    // Save lead to database
    // const lead = await prisma.lead.create({
    //   data: {
    //     name,
    //     email,
    //     phone: phone || null,
    //     grade: grade || null,
    //     message: message || null,
    //     source: "consultation_form",
    //   },
    // })

    // Send notification email to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER
    if (adminEmail) {
      await sendEmail({
        to: adminEmail,
        subject: `New Consultation Request from ${name}`,
        html: getLeadNotificationEmail({ name, email, phone, grade, message }),
        replyTo: email,
      })
    }

    // Send confirmation email to lead
    await sendEmail({
      to: email,
      subject: "Thank You for Contacting Beyond Grade 12",
      html: getLeadConfirmationEmail(name),
    })

    return NextResponse.json(
      { 
        success: true, 
        message: "Your request has been submitted successfully",
        // leadId: lead.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    )
  }
}
