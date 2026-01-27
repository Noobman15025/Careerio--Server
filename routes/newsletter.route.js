import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.verify(); // optional: verifies credentials

        await transporter.sendMail({
            from: `"Career.io Newsletter" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Welcome to Career.io – Your Career Growth Starts Here!",
            html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="text-align: center; background: #6A38C2; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1>Welcome to Career.io!</h1>
        </div>

        <div style="padding: 20px;">
          <p>Hi there,</p>
          <p>Thank you for subscribing to <strong>Career.io Newsletter</strong>! We're thrilled to have you on board.</p>
          
          <p>From now on, you'll receive:</p>
          <ul>
            <li>💼 Latest job openings tailored to your skills</li>
            <li>📈 Career advice and growth tips</li>
            <li>🎓 Learning resources to boost your expertise</li>
          </ul>

          <p>We’re committed to helping you advance in your career journey. Stay tuned for updates!</p>

          <p style="text-align: center; margin-top: 30px;">
            <a href="https://yourwebsite.com" style="background: #6A38C2; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">
              Explore Career.io
            </a>
          </p>

          <p style="margin-top: 30px; font-size: 12px; color: #888;">
            You are receiving this email because you subscribed to the Career.io Newsletter. Rights reserved by Al Shahariar Arafat Shawon.
          </p>
        </div>
      </div>
    `,
        });


        return res.json({ success: true, message: "Subscribed successfully! Check your email." });
    } catch (error) {
        console.error("SMTP Error:", error.message);
        return res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

export default router;
