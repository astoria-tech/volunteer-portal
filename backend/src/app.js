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
const { checkForUser, getRecord, updateRecord } = require('./airtable');

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
  } else {
    res.sendStatus(200);
  }
});

app.post('/api/v1/auth', async (req, res) => {
  const { body } = req;
  checkForUser(body, async recordID => {
    const link = generateLink(recordID);
    console.log(link);
    // send link to email or text
  });
  res.sendStatus(200);
});

app.get('/api/v1/auth/:hash', (req, res) => {
  const recordID = decryptHash(req.params.hash);
  res.cookie('jwt', generateToken(recordID));
  res.redirect('http://localhost:3000');
});

app.get('/api/v1/airtable', (req, res) => {
  const { jwt } = req.cookies;
  const decoded = verifyToken(jwt);
  getRecord(decoded.recordID, res);
});

app.post('/api/v1/airtable', (req, res) => {
  const { jwt } = req.cookies;
  const decoded = verifyToken(jwt);
  const updatedObject = req.body.newObject;
  updateRecord(decoded.recordID, updatedObject);
});

app.listen(port, host, () =>
  console.log(`Example app listening at http://${host}:${port}`)
);
