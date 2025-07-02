const express = require("express");
const router = express.Router();
const { generateRecommendations } = require("../controllers/generateRecommendations");

router.post("/recommendations", (req, res) => {
  try {
    const preferences = req.body;
    console.log("Received preferences:", preferences);

    const results = generateRecommendations(preferences);
    res.json(results);
  } catch (err) {
    console.error("Error in /api/recommendations:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
