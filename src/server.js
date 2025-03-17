const express = require("express");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const otpStore = {}; // Temporary in-memory storage for OTPs (Use Redis for production)

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "your-email@gmail.com", pass: "your-email-password" },
});

// Twilio Setup
const twilioClient = twilio("AC094e0ce382837f34eececede978c8028", "b3b16dd76cb342b1446e0fc9b13c8847");

// Generate & Store OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// Send OTP to Email
app.post("/send-otp", async (req, res) => {
  const { email, phone } = req.body;
  const otp = generateOTP();
  otpStore[email || phone] = otp;

  if (email) {
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Your Admin OTP Code",
      text: `Your OTP is: ${otp}`,
    });
    return res.json({ message: "OTP sent to email!" });
  }

  if (phone) {
    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: "+1234567890",
      to: phone,
    });
    return res.json({ message: "OTP sent to phone!" });
  }

  res.status(400).json({ error: "Invalid request" });
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, phone, otp } = req.body;
  const storedOTP = otpStore[email || phone];

  if (storedOTP && storedOTP === otp) {
    delete otpStore[email || phone];
    return res.json({ message: "OTP Verified! Admin Logged In." });
  }

  res.status(401).json({ error: "Invalid or expired OTP" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
