const express = require('express');
const ejwt = require('express-jwt');

const app = express();

app.get('/', (req, res) => {
  res.send('ayooo');
});

app.get('/protected', ejwt({ secret: 'a fuckin secret' }), (req, res) => {
  if (!req.user.admin) return res.sendStatus(401);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
