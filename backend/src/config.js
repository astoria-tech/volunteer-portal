require('dotenv').config();

const config = {
  baseId: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  AIRTABLE_VOLUNTEERS_TABLE_NAME:
    process.env.AIRTABLE_VOLUNTEERS_TABLE_NAME || 'Volunteers',
  AIRTABLE_VOLUNTEERS_VIEW_NAME:
    process.env.AIRTABLE_VOLUNTEERS_VIEW_NAME || 'Grid view',
  CRYPTO_KEY: process.env.CRYPTO_KEY,
};

module.exports = config;
