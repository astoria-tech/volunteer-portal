const express = require('express');

const { verifyToken } = require('./token');

const app = express();

app.get('/auth/', (req, res) => {
  //   console.log(verifyToken(req.query.token));
  if (!verifyToken(req.query.token)) res.sendStatus(401);
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log('Listening on 3001');
});
