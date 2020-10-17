const mongoCollections = require("../config/mongoCollections");
const books = mongoCollections.books;
const reviews = mongoCollections.reviews;
var ObjectId = require("mongodb").ObjectId;

const exportedMethods = {
  async addBook(title, author, genre, datePublished, summary, reviews) {
    const book = {
      title: title,
      author: author,
      genre: genre,
      datePublished: datePublished,
      summary: summary,
      reviews: [],
    };
    const booksCollection = await books();

    const newInsertInformation = await booksCollection.insertOne(book);
    const newId = newInsertInformation.insertedId;
    return await this.getBookById(newId);
  },
  async editBook(id, title, author, genre, datePublished, summary, oldData) {
    console.log("id first",id)
    const book = {
      title: title,
      author: author,
      genre: genre,
      datePublished: datePublished,
      summary: summary,
      reviews: oldData.reviews,
    };
    const booksCollection = await books();
    try {
      id = typeof id === 'string' ? new ObjectId(id) : id;
      await booksCollection.updateOne({ _id: id }, { $set: book });
      // return newInsertInformation
      return await this.getBookById(id);
    } catch (error) {
      console.log(error)
    }
  },
  async patchBook(id, data) {
    const booksCollection = await books();
    try {
      id = typeof id === 'string' ? new ObjectId(id) : id;
      await booksCollection.updateOne({ _id: id }, { $set: data });
      // return newInsertInformation
      return await this.getBookById(id);
    } catch (error) {
      console.log(error)
    }
  },
  async getAllBooks() {
    const booksCollection = await books();
    let data = await booksCollection.find({}).toArray();
    return data.map((a) => {
      return {
        _id: a._id.toString(),
        title: a.title,
      };
    });
  },
  async getBookById(id) {
    try {
      const booksCollection = await books();
      id = typeof id === 'string' ? new ObjectId(id) : id;
      let book = await booksCollection.findOne({ _id: id });
      if (!book) throw "book not found";
      return await book;
    } catch (e) {
      console.log("e",e)
      throw 'book not found'
    }
  },
  async removeBook(id) {
    const booksCollection = await books();
    const reviewsCollection = await reviews();
    let book = null;
    try {
      book = await this.getBookById(id);
      console.log("book",book)
    } catch (e) {
      console.log(e);
      return;
    }
    id = typeof id === 'string' ? new ObjectId(id) : id;
    const deletionInfo = await booksCollection.removeOne({ _id: id });
    await reviewsCollection.remove({bookBeingReviewed: id.toString()})
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete book with id of ${id}`;
    }
    return {
      bookId: book._id.toString(),
      deleted: true
    }
  },
};

module.exports = exportedMethods;
