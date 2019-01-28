const express = require("express");
const router = express.Router();
const defaults = require("./../config/defaults");
const _hashtag = defaults.INSTAGRAM_DEFAULT_HASHTAG;

router.get("/", async (req, res) => {
  res.send(`scraping hashtag ${_hashtag}`);
});

router.get("/:tag", async (req, res) => {
  res.send(`scraping hashtag ${req.params.tag}`);
});

module.exports = router;
