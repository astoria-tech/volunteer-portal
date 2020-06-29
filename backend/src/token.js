const jwt = require('jsonwebtoken');
const fs = require('fs');
const Cryptr = require('cryptr');
const config = require('./config');

const privateKey = fs.readFileSync('private.key');
const publicKey = fs.readFileSync('public.pub');
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
      algorithm: 'RS256',
    }
  );
  return token;
};

const verifyToken = token =>
  jwt.verify(token, publicKey, (err, decoded) => {
    if (err) throw err;
    return decoded;
  });

const generateLink = recordID => {
  console.log(recordID);
  const hash = cryptr.encrypt(recordID);
  return `localhost:3001/api/v1/auth/${hash}`;
};

const decryptHash = hash => {
  const str = cryptr.decrypt(hash);
  return str;
};
const checkForCookie = jwtCookie => {
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
