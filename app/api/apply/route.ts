import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      studentName, 
      parentName, 
      email, 
      phone, 
      grade, 
      school, 
      interests, 
      goals, 
      howDidYouHear 
    } = body

    // Validate required fields
    if (!studentName || !email || !phone || !grade) {
      return NextResponse.json(
        { error: "Student name, email, phone, and grade are required" },
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

    // Save application to database
    const application = await prisma.application.create({
      data: {
        studentName,
        parentName: parentName || null,
        email,
        phone,
        grade,
        school: school || null,
        interests: interests || null,
        goals: goals || null,
        howDidYouHear: howDidYouHear || null,
        status: "pending",
      },
    })

    // Send notification email to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER
    if (adminEmail) {
      await sendEmail({
        to: adminEmail,
        subject: `New Elite Pathway Application - ${studentName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head><meta charset="utf-8"></head>
          <body style="font-family: sans-serif; line-height: 1.6; color: #2E2E2E; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #0B1F3A; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #C5A46D; margin: 0;">New Elite Pathway Application</h1>
            </div>
            <div style="background-color: #F8F6F2; padding: 30px; border-radius: 0 0 8px 8px;">
              <h2 style="color: #0B1F3A;">Application Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Student Name:</strong></td><td>${studentName}</td></tr>
                ${parentName ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Parent Name:</strong></td><td>${parentName}</td></tr>` : ''}
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Phone:</strong></td><td>${phone}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Grade:</strong></td><td>${grade}</td></tr>
                ${school ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>School:</strong></td><td>${school}</td></tr>` : ''}
                ${interests ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Interests:</strong></td><td>${interests}</td></tr>` : ''}
                ${goals ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>Goals:</strong></td><td>${goals}</td></tr>` : ''}
                ${howDidYouHear ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #D4D2CE;"><strong>How they heard about us:</strong></td><td>${howDidYouHear}</td></tr>` : ''}
              </table>
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #0B1F3A; color: #F8F6F2; padding: 12px 24px; text-decoration: none; border-radius: 4px;">Contact Applicant</a>
              </div>
            </div>
          </body>
          </html>
        `,
        replyTo: email,
      })
    }

    // Send confirmation email to applicant
    await sendEmail({
      to: email,
      subject: "Application Received - Beyond Grade 12 Elite Pathway",
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
            <h2 style="color: #0B1F3A; margin-top: 0;">Your Application Has Been Received!</h2>
            <p>Dear ${studentName},</p>
            <p>Thank you for applying to the <strong>Beyond Grade 12 Elite Pathway</strong>. We're thrilled that you've taken this important step toward your future.</p>
            <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #C5A46D;">
              <h3 style="color: #0B1F3A; margin-top: 0;">What Happens Next:</h3>
              <ol style="margin: 0; padding-left: 20px;">
                <li>Our admissions team will review your application within 3-5 business days</li>
                <li>If selected, you'll be invited for a brief introductory call</li>
                <li>Upon acceptance, you'll receive details about your cohort and start date</li>
              </ol>
            </div>
            <p>If you have any questions in the meantime, don't hesitate to reach out.</p>
            <p style="margin-bottom: 0;">We look forward to potentially having you in our program!</p>
            <p style="color: #0B1F3A; font-weight: bold; margin-top: 5px;">The Beyond Grade 12 Team</p>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: "Your application has been submitted successfully",
        applicationId: application.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json(
      { error: "Failed to process your application. Please try again." },
      { status: 500 }
    )
  }
}
