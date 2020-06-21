const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('private.key');
const publicKey = fs.readFileSync('public.pub');

const generateToken = userName => {
  const token = jwt.sign(
    {
      userName,
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

const generateLink = () =>
  `localhost:3000/auth/?token=${generateToken('kyletomanelli@gmail.com')}`;

// console.log(verifyToken(generateToken()));

// console.log(generateToken('kyletomanelli@gmail.com'));

console.log(generateLink());

module.exports = { verifyToken };
