// import nodemailer from "nodemailer";

// export const sendContactMessage = async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // App password
//       },
//     });

//     // 1️⃣ EMAIL TO YOU (ADMIN)
//     const adminMail = {
//       from: `"${name}" <${email}>`,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Message from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}

// Message:
// ${message}
//       `,
//     };

//     // 2️⃣ AUTO-REPLY TO USER
//     const autoReplyMail = {
//       from: `"Olaseinde Samuel's Portfolio" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "We’ve received your message",
//       html: `
//   <p>Hello <strong>${name}</strong>,</p>
//   <p>We have received your message and will get back to you shortly.</p>
//   <p>Best regards,<br/>Samuel Olaseinde (Lhekzdev)</p>,
//     `,
//     }
//     // Send both emails
//     await transporter.sendMail(adminMail);
//     await transporter.sendMail(autoReplyMail);

//     res.status(200).json({
//       success: true,
//       message: "Message sent and confirmation email delivered",
//     });

//   } catch (error) {
//     console.error("❌ Email error:", error);
//     res.status(500).json({
//       error: "Failed to send message",
//     });
//   }
// };



import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  if (!process.env.EMAIL_USER) {
    return res.status(500).json({
      error: "Admin email not configured",
    });
  }

  try {
    // 1️⃣ Email to ADMIN
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
res.status(200).json({
      success: true,
      message: "Message sent and confirmation email delivered",
    });

  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({
      error: "Failed to send message",
    });
  }
};
