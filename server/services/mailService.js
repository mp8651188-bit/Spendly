const transporter = require("../config/emailConfig");
const assertEmailConfigured = () => {
  const missing = ["EMAIL_USER", "EMAIL_PASS", "EMAIL_FROM"]
    .filter((key) => !process.env[key] || !process.env[key].trim());
  if (missing.length) {
    const error = new Error("Email service is not configured. Set " + missing.join(", ") + " on the server.");
    error.code = "EMAIL_NOT_CONFIGURED";
    throw error;
  }
};
const sendMail = async ({ to, subject, html }) => {
  assertEmailConfigured();
  const result = await transporter.sendMail({
    from: { name: "Spendly", address: process.env.EMAIL_FROM },
    to, subject, html,
  });
  if (!result.accepted || result.accepted.length === 0) {
    const error = new Error("The email server did not accept the recipient.");
    error.code = "EMAIL_RECIPIENT_REJECTED";
    throw error;
  }
  return result;
};
module.exports = sendMail;
module.exports.assertEmailConfigured = assertEmailConfigured;
