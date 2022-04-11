const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi! everyone"
  });
});

// app.use(`/.netlify/functions/api`, router);
app.use(`/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
