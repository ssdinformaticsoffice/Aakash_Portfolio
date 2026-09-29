import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    await transporter.sendMail({
      from: `"Akash Verma Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
       <div 
       style=" margin: 0; padding: 40px 20px; background-color: #f4f6f8; 
       font-family: Arial, Helvetica, sans-serif; color: #1f2937; ">
        <div style=" max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); ">
         <!-- Header --> <div style=" background: #111827; padding: 28px 32px; color: #ffffff; "> 
         <h2 style=" margin: 0; font-size: 24px; font-weight: 600; "> New Contact Form Message </h2> 
         <p style=" margin: 8px 0 0; color: #9ca3af; font-size: 14px; ">
          You have received a new message from your website. </p> 
          </div>
           <!-- Content --> <div style="padding: 32px;"> <div style=" margin-bottom: 24px; padding: 18px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; ">
            <p style="margin: 0 0 12px;">
             <strong style="color: #111827;">Name</strong><br /> 
             <span style="color: #4b5563;">${name}</span> 
             </p> <p style="margin: 0 0 12px;"> <strong style="color: #111827;">Email</strong><br /> 
             <span style="color: #4b5563;">${email}</span> 
             </p>
              <p style="margin: 0;"> 
             <strong style="color: #111827;">Subject</strong>
             <br /> <span style="color: #4b5563;">${subject}</span> </p>
              </div> <!-- Message --> <div> <h3 style=" margin: 0 0 12px; font-size: 16px; color: #111827; "> Message </h3> 
              <div style=" padding: 18px; background: #ffffff; border-left: 4px solid #111827; border-radius: 6px; color: #4b5563; line-height: 1.7; white-space: pre-line; "> ${message} </div> </div> </div> 
              <!-- Footer --> <div style=" padding: 18px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center; ">
               <p style=" margin: 0; font-size: 12px; color: #9ca3af; "> This message was sent through the website contact form. </p>
                </div>
               </div>
                </div> `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

export default router;