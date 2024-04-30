var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  Score.find().then((data) => {
    res.json({ result: data });
  });
});

router.post("/new", (req, res) => {
  if (!req.body.username === null) {
    const newScore = new Score({
      user: req.body.user,
      score: req.body.score,
      category: req.body.category,
      date: new Date(),
    });
    newScore.save().then(() => res.json({ result: true }));
  }
});

module.exports = router;
