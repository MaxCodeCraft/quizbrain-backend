var express = require("express");
var router = express.Router();
const Score = require("../models/scores");

router.get("/", (req, res) => {
  Score.find().then((data) => {
    res.json({ result: data });
  });
});

router.post("/new", (req, res) => {
  if (req.body.user) {
    const newScore = new Score({
      user: req.body.user,
      score: req.body.score,
      category: req.body.category,
      date: new Date(),
    });

    newScore.save().then(() => res.json({ result: true }));
  } else {
    res.json({ error: "Nom d'utilisateur non fourni." });
  }
});

module.exports = router;
