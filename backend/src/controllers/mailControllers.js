require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = (req, res) => {
  const message = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // sendEmail.js

  const mailOption = {
    from: message.email,
    to: "amina.hakimi86@gmail.com",
    subject: `portfolio - nouveau message de ${message.name}`,
    text: message.message,
    html: `${message.message}`,
  };
  return transporter
    .sendMail(mailOption)
    .then(() => {
      res.status(200).send("message sent");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
module.exports = { sendEmail };
