const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

// const sendEmailEthereal = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//       user: 'marlene.legros@ethereal.email',
//       pass: 'va4q5BKKtry7aq58Gv',
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"Coding Addict" <codingaddict@gmail.com>',
//     to: 'bar@example.com',
//     subject: 'Hello',
//     html: '<h2>Sending Emails with Node.js</h2>',
//   });

//   res.json(info);
// };

// const sendEmail = async (req, res) => {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: 'learncode@mail.com', // Change to your recipient
//     from: 'learncodetutorial@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   const info = await sgMail.send(msg);
//   res.json(info);
// };

// module.exports = sendEmail;




// const nodemailer = require('nodemailer');

const sendEmailEthereal = async (req, res) => {
  // Create a test account with Ethereal
  let testAccount = await nodemailer.createTestAccount();

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'totonlionel@gmail.com', // Your Gmail email address
      pass: 'hwxspysgexbavfol', // Your Gmail password or app password
    },
  });

  // Send a test email
  let info = await transporter.sendMail({
    from: '"Lionel TOTON" <totonlionel@gmail.com>',
    to: 'totonlion2002@gmail.com', // Change to the recipient email address
    subject: 'Hello Lionel',
    html: '<h2>I\'ve got the skill to spread mails with direct en API the </h2>',
  });

  res.json(info);
};

module.exports = sendEmailEthereal;

