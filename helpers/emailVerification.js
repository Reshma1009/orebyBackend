const nodemailer = require("nodemailer");

async function emailVerification(email,template) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
   let info = await transporter.sendMail({
     from: "Reshme nila", // sender address
     to: email, // list of receivers
     subject: "Hello ✔", // Subject line
     html: template, // html body
   });
}

module.exports = emailVerification;