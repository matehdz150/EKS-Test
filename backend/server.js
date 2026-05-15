const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/health", (_req, res) => {
  res.type("text/plain").send("health con EKS!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});