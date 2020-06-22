const express = require("express");

const host = "0.0.0.0";
const port = 3001;

const app = express();

app.get('/api/v1/', (req, res) => res.json({ greeting: 'Hello World!' }))

app.listen(port, host, () =>
  console.log(`Example app listening at http://${host}:${port}`)
);
