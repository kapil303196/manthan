const express = require("express");
const router = express.Router();
const data = require("../data");
const booksData = data.books;
const reviewsData = data.reviews;

router.post("/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  let book;
  let review;
  console.log("route id", id);
  if (!id) {
    res.status(400).json({ error: "You must provide valid id" });
    return;
  }
  if (!body.title || typeof body.title !== "string") {
    res.status(400).json({ error: "You must provide valid title" });
    return;
  }
  if (!body.reviewer || typeof body.reviewer !== "string") {
    res.status(400).json({ error: "You must provide valid reviewer" });
    return;
  }
  if (!body.bookBeingReviewed || typeof body.bookBeingReviewed !== "string") {
    res.status(400).json({ error: "You must provide valid bookBeingReviewed" });
    return;
  }
  if (!body.rating || typeof body.rating !== "number") {
    res.status(400).json({ error: "You must provide valid rating" });
    return;
  }
  if (
    !body.dateOfReview ||
    new Date(body.dateOfReview).toString() === "Invalid Date"
  ) {
    res.status(400).json({ error: "You must provide valid date reviewed" });
    return;
  }
  if (!body.review || typeof body.review !== "string") {
    res.status(400).json({ error: "You must provide valid review" });
    return;
  }
  try {
    book = await booksData.getBookById(req.params.id);
    // res.json(book);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
  try {
    review = await reviewsData.addReview(body);
    res.json(review);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.status(400).json({ error: "You must provide valid id" });
    return;
  }
  try {
    book = await booksData.getBookById(req.params.id);
    // res.json(book);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
  try {
    const post = await reviewsData.getReviewsByBookId(req.params.id);
    console.log("post",post)
    res.json(post);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
});

router.get("/:bookId/:reviewId", async (req, res) => {
  let bookId = req.params.bookId;
  let reviewId = req.params.reviewId;
  if (!bookId) {
    res.status(400).json({ error: "You must provide valid bookId" });
    return;
  }
  if (!reviewId) {
    res.status(400).json({ error: "You must provide valid reviewId" });
    return;
  }
  try {
    review = await reviewsData.getReviewByBookAndID(reviewId, bookId);
    res.json(review);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
});

router.delete("/:bookId/:reviewId", async (req, res) => {
  let bookId = req.params.bookId;
  let reviewId = req.params.reviewId;
  if (!bookId) {
    res.status(400).json({ error: "You must provide valid bookId" });
    return;
  }
  if (!reviewId) {
    res.status(400).json({ error: "You must provide valid reviewId" });
    return;
  }
  try {
    review = await reviewsData.deleteReview(reviewId, bookId);
    res.json(review);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
});

module.exports = router;
