var express = require("express");
var router = express.Router();
import Score from "../models/scores";

router.get("/", async (req, res) => {
  const response = await Score.find();
  const data = await response.json();
  res.json(data);
});

router.post("/new", (req, res) => {});

module.exports = router;
