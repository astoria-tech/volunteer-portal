const twilio = require("twilio");
const config = require("./config.js");

// Initialize the Twilio client
const twilioClient = twilio(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
);

// Function to send an SMS message
function sendSMS(recipientNumber, message) {
  twilioClient.messages
    .create({
      body: message,
      from: config.TWILIO_PHONE_NUMBER,
      to: recipientNumber,
    })
    .then((message) => {
      logger.info(
        `successfully sent SMS to ${recipientNumber} (sid: ${message.sid})`
      );
    })
    .catch((error) => {
      logger.error(`failed sending SMS to ${recipientNumber}`);
    });
}

module.exports = { sendSMS };
