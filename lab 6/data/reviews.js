const mongoCollections = require("../config/mongoCollections");
const books = mongoCollections.books;
const reviews = mongoCollections.reviews;
var ObjectId = require("mongodb").ObjectId;

const exportedMethods = {
  async addReview(data) {
    const booksCollection = await books();
    const reviewsCollection = await reviews();
    let book;
    try {
      book = await booksCollection.findOne({ _id: new ObjectId(data.bookBeingReviewed) });
      if (!book) throw "book not found";
    } catch (e) {
      console.log("e", e);
      throw "book not found";
    }
    try {
      const newInsertInformation = await reviewsCollection.insertOne(data);
      // return newInsertInformation
      const newId = newInsertInformation.insertedId;

      let reviews = [...book.reviews, newId];
      reviews = reviews.map((a) => {
        return a.toString()
      })
      book.reviews = reviews;
      await booksCollection.updateOne(
        { _id: new ObjectId(data.bookBeingReviewed) },
        { $set: book }
      );
      return await this.getReviewsById(newId);
    } catch (error) {
      console.log("Erroor", error);
      throw "error adding review";
    }
  },
  async getReviewsByBookId(id) {
    const reviewsCollection = await reviews();
    try {
      let d = await reviewsCollection.find({ bookBeingReviewed: id }).toArray();
      return d;
    } catch (error) {
      console.log(error);
    }
  },
  async getReviewsById(id) {
    const reviewsCollection = await reviews();
    try {
      id = typeof id === "string" ? new ObjectId(id) : id;
      let d = await reviewsCollection.findOne({ _id: id });
      return d;
    } catch (error) {
      console.log(error);
      throw "review not found";
    }
  },
  async getReviewByBookAndID(reviewId, bookId) {
    const reviewsCollection = await reviews();
    try {
      reviewId = typeof reviewId === "string" ? new ObjectId(reviewId) : reviewId;
      let d = await reviewsCollection.findOne({ _id: reviewId, bookBeingReviewed: bookId});
      return d;
    } catch (error) {
      console.log(error);
      throw "review not found";
    }
  },
  async deleteReview(reviewId, bookId) {
    const reviewsCollection = await reviews();
    const booksCollection = await books();
    try {
      reviewId = typeof reviewId === "string" ? new ObjectId(reviewId) : reviewId;
      let data = await reviewsCollection.findOne({_id: reviewId})
      if (!data) {
        throw "review not found"
      }
      let d = await reviewsCollection.removeOne({ _id: reviewId, bookBeingReviewed: bookId});
      let book = await booksCollection.findOne({
        reviews: {
          $elemMatch: {
            $eq: reviewId.toString()
          }
        }
      })
      let reviews = await book.reviews.filter((e) => e.toString() !== reviewId.toString())
      book.reviews = reviews;
      await booksCollection.updateOne({_id: book._id}, {$set: book})
      let response = await booksCollection.findOne({_id: book._id})
      return {
        reviewId: reviewId.toString(),
        deleted: true
      }
    } catch (error) {
      console.log(error);
      throw "review not found";
    }
  },
};

module.exports = exportedMethods;
