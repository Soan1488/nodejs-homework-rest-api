const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerifyEmail = (user) => {
  const msg = {
    to: user.email, // Change to your recipient
    from: "andrisokolovskiy@gmail.com", // Change to your verified sender
    subject: "Please verify your accaunt",
    text: `http://localhost:3000/api/users/verify/${user.verificationToken}`,
    html: `<h1>Please push to link </h1><a>http://localhost:3000/api/users/verify/${user.verificationToken}</a>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      return new Error(error.message);
    });
};

module.exports = sendVerifyEmail;
