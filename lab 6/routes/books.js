const express = require("express");
const router = express.Router();
const data = require("../data");
const booksData = data.books;

router.post("/", async (req, res) => {
  const bookData = req.body;
  if (!bookData.title || typeof bookData.title !== "string") {
    res.status(400).json({ error: "You must provide valid book title" });
    return;
  }
  if (bookData.author === {} || typeof bookData.author !== "object") {
    res.status(400).json({ error: "You must provide valid book auther" });
    return;
  }
  if (
    !bookData.author.authorFirstName ||
    typeof bookData.author.authorFirstName !== "string"
  ) {
    res
      .status(400)
      .json({ error: "You must provide valid book auther first name" });
    return;
  }
  if (
    !bookData.author.authorLastName ||
    typeof bookData.author.authorLastName !== "string"
  ) {
    res
      .status(400)
      .json({ error: "You must provide valid book auther last name" });
    return;
  }
  if (
    !Array.isArray(bookData.genre) ||
    bookData.genre.length === 0
  ) {
    res.status(400).json({ error: "You must provide valid genre" });
    return;
  }
  if (!bookData.datePublished || new Date(bookData.datePublished).toString() === "Invalid Date") {
    res.status(400).json({ error: "You must provide valid date Published" });
    return;
  }
  if (!bookData.summary || typeof bookData.summary !== "string") {
    res.status(400).json({ error: "You must provide valid summary" });
    return;
  }
  try {
    const { title, author, genre, datePublished, summary, reviews } = bookData;
    const newPost = await booksData.addBook(
      title,
      author,
      genre,
      datePublished,
      summary,
      reviews
    );
    res.json(newPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/", async (req, res) => {
  try {
    const post = await booksData.getAllBooks();
    res.json(post);
  } catch (e) {
    res.status(404).json({ error: "Can not get books" });
  }
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  if(!id) {
    res.status(400).json({ error: "You must provide valid id" });
    return;
  }
  try {
    const post = await booksData.getBookById(req.params.id);
    res.json(post);
  } catch (e) {
    console.log(e)
    res.status(404).json({ error: e });
  }
});

router.put("/:id", async (req, res) => {
  const bookData = req.body;
  const id = req.params.id;
  let book;
  console.log("route id",id)
  if(!id) {
    res.status(400).json({ error: "You must provide valid id" });
    return;
  }
  try {
    book = await booksData.getBookById(req.params.id);
  } catch (e) {
    console.log(e)
    res.status(404).json({ error: e });
  }
  if (!bookData.title || typeof bookData.title !== "string") {
    res.status(400).json({ error: "You must provide valid book title" });
    return;
  }
  if (bookData.author === {} || typeof bookData.author !== "object") {
    res.status(400).json({ error: "You must provide valid book auther" });
    return;
  }
  if (
    !bookData.author.authorFirstName ||
    typeof bookData.author.authorFirstName !== "string"
  ) {
    res
      .status(400)
      .json({ error: "You must provide valid book auther first name" });
    return;
  }
  if (
    !bookData.author.authorLastName ||
    typeof bookData.author.authorLastName !== "string"
  ) {
    res
      .status(400)
      .json({ error: "You must provide valid book auther last name" });
    return;
  }
  if (
    !Array.isArray(bookData.genre) ||
    bookData.genre.length === 0
  ) {
    res.status(400).json({ error: "You must provide valid genre" });
    return;
  }
  if (!bookData.datePublished || new Date(bookData.datePublished).toString() === "Invalid Date") {
    res.status(400).json({ error: "You must provide valid date Published" });
    return;
  }
  if (!bookData.summary || typeof bookData.summary !== "string") {
    res.status(400).json({ error: "You must provide valid summary" });
    return;
  }
  try {
    const { title, author, genre, datePublished, summary } = bookData;
    const post = await booksData.editBook(
      id,
      title,
      author,
      genre,
      datePublished,
      summary,
      book
    );
    res.json(post);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
  let body = req.body;
  const id = req.params.id;
  let book;
  let updated = {};
  console.log("route id",id)
  if(!id) {
    res.status(400).json({ error: "You must provide valid id" });
    return;
  }
  try {
    book = await booksData.getBookById(req.params.id);
    updated = book;
    if (
      !body.title &&
      !body.author &&
      !body.genre &&
      !body.datePublished &&
      !body.summary &&
      !body.reviews
      ) {
        res.status(400).json({ error: "You must provide valid data" });
        return;
    }
    if(body.title && body.title !== book.title) {
      if (!body.title || typeof body.title !== "string") {
        res.status(400).json({ error: "You must provide valid book title" });
        return;
      }
      updated.title = body.title;
    }
    if (body.author && JSON.stringify(body.author) !== JSON.stringify(book.author)) {
      if (body.author === {} || typeof body.author !== "object") {
        res.status(400).json({ error: "You must provide valid book auther" });
        return;
      }
      if (
        !body.author.authorFirstName ||
        typeof body.author.authorFirstName !== "string"
      ) {
        res
          .status(400)
          .json({ error: "You must provide valid book auther first name" });
        return;
      }
      if (
        !body.author.authorLastName ||
        typeof body.author.authorLastName !== "string"
      ) {
        res
          .status(400)
          .json({ error: "You must provide valid book auther last name" });
        return;
      }
      updated.author = body.author
    }
    if (body.genre && JSON.stringify(body.genre) !== JSON.stringify(book.genre)) {
      if (
        !Array.isArray(body.genre) ||
        body.genre.length === 0
      ) {
        res.status(400).json({ error: "You must provide valid genre" });
        return;
      }
      Array.prototype.unique = function() {
        var a = this.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    
        return a;
    };
      updated.genre = book.genre.concat(body.genre).unique();
    }
    if (body.datePublished && body.datePublished !== book.datePublished) {
      if (!body.datePublished || new Date(body.datePublished).toString() === "Invalid Date") {
        res.status(400).json({ error: "You must provide valid date Published" });
        return;
      }
      updated.datePublished = body.datePublished
    }
    if (body.summary && body.summary !== book.summary) {
      if (!body.summary || typeof body.summary !== "string") {
        res.status(400).json({ error: "You must provide valid summary" });
        return;
      }
      updated.summary = body.summary
    }
    updated.reviews = book.reviews
    // res.json(book);
  } catch (e) {
    res.status(404).json({ error: e });
  }
  try {
    // console.log("updated",updated)
    let data = await booksData.patchBook(id, updated)
    res.json(data)
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

router.delete('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: 'You must Supply an ID to delete' });
    return;
  }
  try {
    await booksData.getBookById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  try {
    let data = await booksData.removeBook(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
