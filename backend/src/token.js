const jwt = require("jsonwebtoken");
const fs = require("fs");
const Cryptr = require("cryptr");
const config = require("./config");

const publicKey = Buffer.from(config.JWT_PUBLIC_KEY_BASE64, "base64");
const privateKey = Buffer.from(config.JWT_PRIVATE_KEY_BASE64, "base64");
const cryptr = new Cryptr(config.CRYPTO_KEY);

const generateToken = (recordID = null) => {
  const token = jwt.sign(
    {
      recordID,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    privateKey,
    {
      algorithm: "RS256",
    }
  );
  return token;
};

const verifyToken = (token) =>
  jwt.verify(token, publicKey, (err, decoded) => {
    if (err) throw err;
    return decoded;
  });

const generateLink = (recordID) => {
  console.log(`creating link for Airtable record: ${recordID}`);
  const hash = cryptr.encrypt(recordID);
  return `http://localhost:3001/api/v1/auth/${hash}`;
};

const decryptHash = (hash) => {
  const str = cryptr.decrypt(hash);
  return str;
};
const checkForCookie = (jwtCookie) => {
  if (jwtCookie) {
    if (verifyToken(jwtCookie)) {
      return true;
    }
  }
  return false;
};

module.exports = {
  generateToken,
  verifyToken,
  generateLink,
  decryptHash,
  checkForCookie,
};
