const mailjet = require("node-mailjet");
const config = require("./config");

const mailjetClient = mailjet.connect(
  config.MAILJET_API_KEY,
  config.MAILJET_SECRET_KEY
);

async function sendEmail(recipientEmail, subject, textBody, htmlBody) {
  mailjetClient
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "no-reply@astoriamutualaid.com",
            Name: "Volunteer Bot",
          },
          To: [
            {
              Email: recipientEmail,
              Name: recipientEmail,
            },
          ],
          Subject: subject,
          TextPart: textBody,
          HTMLPart: htmlBody,
        },
      ],
    })
    .then((result) => {
      console.log(result.body);
      return true;
    })
    .catch((err) => {
      console.log(err.statusCode);
      return false;
    });
}

module.exports = { sendEmail };
