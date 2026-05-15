const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    pod: os.hostname(),
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});