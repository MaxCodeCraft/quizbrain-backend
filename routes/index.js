var express = require("express");
var router = express.Router();

router.get("/linux", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&category=linux&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/bash", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&tags=BASH&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/docker", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&tags=Docker&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/javascript", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&tags=JavaScript&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/html", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&tags=HTML&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/php", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&tags=PHP&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/sql", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&category=sql&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/code", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&category=code&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/python", async (req, res) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&tags=Python&limit=10`
  );
  const data = await response.json();
  res.json(data);
});

module.exports = router;
