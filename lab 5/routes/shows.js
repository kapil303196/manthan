const express = require("express");
const router = express.Router();
const data = require("../data");
const showsData = data.shows;

router.get("/", async (req, res) => {
  try {
    const shows = await showsData.getAllShows()
    res.json(shows.data);
  } catch (e) {
    console.log("error",e)
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const show = await showsData.getShowById(req.params.id);
    res.json(show.data);
  } catch (e) {
    res.status(404).json({ message: "Show not found" });
  }
});


module.exports = router;
