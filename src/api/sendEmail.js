const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5173; // Use the port your server is listening on

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle sending emails
app.post("/api/sendEmail", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a SMTP transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your-email@example.com", // Your email
      pass: "your-password", // Your password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Your Name" <your-email@example.com>',
      to: "recipient@gmail.com", // List of receivers (comma-separated)
      subject: "New Contact Form Submission",
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
