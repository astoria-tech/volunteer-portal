require('dotenv').config();

const config = {
  AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  AIRTABLE_VOLUNTEERS_TABLE_NAME:
    process.env.AIRTABLE_VOLUNTEERS_TABLE_NAME || 'Volunteers',
  AIRTABLE_VOLUNTEERS_VIEW_NAME:
    process.env.AIRTABLE_VOLUNTEERS_VIEW_NAME || 'Grid view',
  CRYPTO_KEY: process.env.CRYPTO_KEY,
  JWT_PUBLIC_KEY_BASE64: process.env.JWT_PUBLIC_KEY_BASE64,
  JWT_PRIVATE_KEY_BASE64: process.env.JWT_PRIVATE_KEY_BASE64
};

module.exports = config;
