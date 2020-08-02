require("dotenv").config();

function boolean(envVarName, _default) {
  // Return the default if the variable is not in the environment
  if (process.env[envVarName] === undefined) {
    return _default;
  }

  // Parse the boolean string
  const envValue = process.env[envVarName];
  if (envValue.toLowerCase() === "true") {
    return true;
  } else if (envValue.toLowerCase() === "false") {
    return false;
  } else {
    // Quit if the environment value was neither "true" nor "False"
    console.error(`"${envValue}" is not a proper boolean configuration!`);
    process.exit(1);
  }
}

const config = {
  // Airtable
  AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  AIRTABLE_VOLUNTEERS_TABLE_NAME:
    process.env.AIRTABLE_VOLUNTEERS_TABLE_NAME || "Volunteers",
  AIRTABLE_VOLUNTEERS_VIEW_NAME:
    process.env.AIRTABLE_VOLUNTEERS_VIEW_NAME || "Grid view",

  // Email
  MAILJET_API_KEY: process.env.MAILJET_API_KEY,
  MAILJET_SECRET_KEY: process.env.MAILJET_SECRET_KEY,

  // Twilio
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,

  // This app's auth config
  CRYPTO_KEY: process.env.CRYPTO_KEY,
  JWT_PUBLIC_KEY_BASE64: process.env.JWT_PUBLIC_KEY_BASE64,
  JWT_PRIVATE_KEY_BASE64: process.env.JWT_PRIVATE_KEY_BASE64,

  // This app's config
  VOLUNTEER_PORTAL_HTTPS_ENABLED: boolean(
    "VOLUNTEER_PORTAL_HTTPS_ENABLED",
    false
  ),
  VOLUNTEER_PORTAL_FRONTEND_DOMAIN:
    process.env.VOLUNTEER_PORTAL_FRONTEND_DOMAIN || "localhost",
  VOLUNTEER_PORTAL_FRONTEND_PORT:
    process.env.VOLUNTEER_PORTAL_FRONTEND_PORT || "3000",
};

// Set the URL for convenience after we gather the config
const httpScheme = config.VOLUNTEER_PORTAL_HTTPS_ENABLED ? "https" : "http";
if (config.VOLUNTEER_PORTAL_FRONTEND_PORT == "80") {
  config.VOLUNTEER_PORTAL_URL = `${httpScheme}://${config.VOLUNTEER_PORTAL_FRONTEND_DOMAIN}`;
} else {
  config.VOLUNTEER_PORTAL_URL = `${httpScheme}://${config.VOLUNTEER_PORTAL_FRONTEND_DOMAIN}:${config.VOLUNTEER_PORTAL_FRONTEND_PORT}`;
}

module.exports = config;
