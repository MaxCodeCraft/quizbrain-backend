const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  user: String,
  score: Number,
  category: String,
  date: Date,
});

const Score = mongoose.model("scores", scoreSchema);

module.exports = Score;
