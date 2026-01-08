import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // 1️⃣ EMAIL TO YOU (ADMIN)
    const adminMail = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // 2️⃣ AUTO-REPLY TO USER
    const autoReplyMail = {
      from: `"Olaseinde Samuel's Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We’ve received your message",
      html: `
  <p>Hello <strong>${name}</strong>,</p>
  <p>We have received your message and will get back to you shortly.</p>
  <p>Best regards,<br/>Samuel Olaseinde (Lhekzdev)</p>,
    `,
    }
    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(autoReplyMail);

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
