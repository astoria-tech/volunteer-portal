const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {
  verifyToken,
  generateToken,
  checkForCookie,
  generateLink,
  decryptHash,
} = require('./token');
const { checkForUser } = require('./airtable');

const host = '0.0.0.0';
const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/api/v1/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/initial', (req, res) => {
  const { body } = req;
  const { jwt } = req.cookies;
  if (checkForCookie(jwt)) {
    res.sendStatus(302);
  }
});

app.post('/api/v1/auth', async (req, res) => {
  const { body } = req;
  const { jwt } = req.cookies;
  checkForUser(body, async recordID => {
    const link = generateLink(recordID);
    // send link to email or text
  });
  res.sendStatus(200);
});

app.get('/api/v1/auth/:hash', (req, res) => {
  const recordID = decryptHash(req.params.hash);
  res.cookie('jwt', generateToken(recordID));
  // redirect to main page
});

app.listen(port, host, () =>
  console.log(`Example app listening at http://${host}:${port}`)
);
