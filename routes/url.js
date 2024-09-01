const express = require("express");
const {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleGetAnalytics,
} = require("../controllers/url");
const urlRoute = express.Router();

urlRoute.post("/", handleGenerateNewShortURL);
urlRoute.get("/:shortId", handleRedirectURL);
urlRoute.get("/analytics/:shortId", handleGetAnalytics);

module.exports = urlRoute;
