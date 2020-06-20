const express = require("express");

const host = "0.0.0.0";
const port = 3001;

const app = express();

app.listen(port, host, () =>
  console.log(`Example app listening at http://${host}:${port}`)
);
