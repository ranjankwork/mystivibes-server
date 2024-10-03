// mail.js
const nodemailer = require("nodemailer");

// Create a transporter object using Gmail's SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ranjankwork@gmail.com", // Your Gmail address
    pass: "sgqo ejwt pavn vmzy", // Your Gmail password or app password
  },
});

// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "ranjankwork@gmail.com", // Sender address
    to, // List of recipients
    subject, // Subject line
    text, // Plain text body
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
