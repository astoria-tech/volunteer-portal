const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('private.key');
const publicKey = fs.readFileSync('public.pub');

const generateToken = () => {
  const token = jwt.sign(
    {
      record: '12345',
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

const verifyToken = token => {
  jwt.verify(token, publicKey, (err, decoded) => {
    console.log(decoded);
  });
};

verifyToken(generateToken());
module.exports = { generateToken };
