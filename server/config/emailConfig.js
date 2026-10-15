const nodemailer = require("nodemailer");
const host = process.env.EMAIL_HOST || "smtp.gmail.com";
const port = Number(process.env.EMAIL_PORT || 465);
const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  requireTLS: port !== 465,
  family: 4,
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 30000,
  auth: {
    user: process.env.EMAIL_USER,
    pass: host === "smtp.gmail.com"
      ? (process.env.EMAIL_PASS || "").replace(/\s/g, "")
      : process.env.EMAIL_PASS,
  },
});
module.exports = transporter;
