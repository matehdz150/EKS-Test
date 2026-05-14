const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.type("text/plain").send("hello eks");
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
