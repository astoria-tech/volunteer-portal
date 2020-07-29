const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {
  verifyToken,
  generateToken,
  checkForCookie,
  generateLink,
  decryptHash,
} = require("./token");
const { checkForUser, getRecord, updateRecord } = require("./airtable");
const { sendSMS } = require("./twilio");
const { sendEmail } = require("./mailjet");
const config = require("./config");

// Web server config
const port = 3001;

// Initialize the express server
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/api/v1/", (req, res) => res.send("Hello World!"));

app.get("/api/v1/initial", (req, res) => {
  const { body } = req;
  const { jwt } = req.cookies;
  if (checkForCookie(jwt)) {
    res.sendStatus(202);
  } else {
    res.sendStatus(200);
  }
});

app.post("/api/v1/auth", async (req, res) => {
  // Verify input data was provided
  if (Object.keys(req.body).length == 0) {
    res.sendStatus(400);
  }

  // Get the login type and value
  const [[loginType, loginValue]] = Object.entries(req.body);

  // Check Airtable for that user and send them a link if they exist
  await checkForUser(loginType, loginValue, async (recordID) => {
    // Generate the login link
    const loginLink = generateLink(recordID);

    // Send the link to their number or email
    if (loginType == "phone") {
      sendSMS(
        loginValue,
        `Hey there! Log in to the Astoria Mutual Aid volunteer app here: ${loginLink}`
      );
    } else if (loginType == "email") {
      sendEmail(
        loginValue,
        "Log in to the Astoria Mutual Aid volunteer app",
        `Hey there! Log in to the Astoria Mutual Aid volunteer app here: ${loginLink}`
      );
    }

    // DEBUG: print the link to stdout
    console.log("login link:", loginLink);
  });

  res.sendStatus(200);
});

app.get("/api/v1/auth/:hash", (req, res) => {
  const recordID = decryptHash(req.params.hash);
  console.log("response:", res);
  res.cookie("jwt", generateToken(recordID));
  console.log("redirecting to ", config.VOLUNTEER_PORTAL_URL);
  res.redirect(config.VOLUNTEER_PORTAL_URL);
});

app.get("/api/v1/airtable", (req, res) => {
  const { jwt } = req.cookies;
  console.log("cookies:", req.cookies.jwt);
  const decoded = verifyToken(jwt);
  getRecord(decoded.recordID, res);
});

app.post("/api/v1/airtable", (req, res) => {
  const { jwt } = req.cookies;

  // Decode the the record ID
  const decoded = verifyToken(jwt);
  const updatedObject = req.body;

  updateRecord(decoded.recordID, updatedObject, res);
});

// Start the express serer
const listenURL = `http://0.0.0.0:3001`;
app.listen("3001", "0.0.0.0", () => {
  console.log(`Volunteer portal backend listening at ${listenURL}!`);
});
