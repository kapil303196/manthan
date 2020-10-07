const express = require("express");
const router = express.Router();
const data = require("../data");
const aboutmeData = data.aboutme;

router.get("/", async (req, res) => {
  try {
    const data = await aboutmeData.aboutme();
    res.json(data);
  } catch (e) {
    console.log(e)
    res.status(404).json({ message: "Post not found" });
  }
});

module.exports = router;
