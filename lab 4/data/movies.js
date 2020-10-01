const mongoCollections = require("../config/mongoCollections");
let { ObjectId } = require("mongodb");

const movies = mongoCollections.movies;

module.exports = {
  async create(title, plot, rating, runtime, genre, cast, info) {
    if (!title && !plot && !rating && !runtime && !genre && !cast && !info)
      throw "All fields need to have valid values";

    if (
      title.trim() === "" ||
      typeof title !== "string" ||
      plot.trim() === "" ||
      typeof plot !== "string" ||
      rating.trim() === "" ||
      typeof rating !== "string" ||
      runtime.trim() === "" ||
      typeof runtime !== "string" ||
      genre.trim() === "" ||
      typeof genre !== "string"
    )
      throw "You must provide values as string ";

    if (!cast || !Array.isArray(cast))
      throw "You must provide an array of cast";

    if (!info || typeof info !== "object")
      throw "You must provide an object of info";

    if (
      !info.director ||
      info.director.trim() === "" ||
      typeof info.director !== "string"
    )
      throw "You must provide an string value for director in info";

    if (!info.yearReleased || typeof info.yearReleased !== "number")
      throw "You must provide an number value for year released in info";

    if (info.yearReleased.toString().length !== 4 || !info.yearReleased)
      throw "You must provide an 4 digit value for year released in info";

    let maxYear = new Date().getFullYear() + 5;

    if (info.yearReleased < 1930 || info.yearReleased > maxYear)
      throw (
        "You must provide an year released less than 1930 and not greater then " +
        maxYear
      );

    const moviesCollection = await movies();

    let newMovie = {
      title,
      plot,
      rating,
      runtime,
      genre,
      cast,
      info,
    };

    const insertInfo = await moviesCollection.insertOne(newMovie);

    if (insertInfo.insertedCount === 0) throw "Could not add movie";
    const newId = insertInfo.insertedId.toString();

    const movie = await this.get(newId);
    return movie;
  },
  async get(id) {
    if (!id) throw "You must provide an id to search for";
    if (id.trim() === "" || typeof id !== "string")
      throw "You must provide an id in string format";
    if (ObjectId(id.trim())) {
      id = ObjectId(id.trim());
    } else {
      throw "You must provide a valid Object Id";
    }
    const moviesCollection = await movies();
    const movie = await moviesCollection.findOne({ _id: id });
    if (movie === null) throw "No movie with that id";

    return movie;
  },
  async getAll() {
    const moviesCollection = await movies();

    const moviesList = await moviesCollection.find({}).toArray();

    return moviesList;
  },
  async remove(id) {
    if (!id) throw "You must provide an id to search for";
    if (id.trim() === "" || typeof id !== "string")
      throw "You must provide an id in string format";
    if (ObjectId(id.trim())) {
      id = ObjectId(id.trim());
    } else {
      throw "You must provide a valid Object Id";
    }
    const moviesCollection = await movies();
    const data = await this.get(id.toString());
    const movie = await moviesCollection.deleteOne({ _id: id });

    if (movie === null) throw "No movie with that id";

    return data.title + " has been successfully deleted";
  },
  async rename(id, newTitle) {
    if (!id) throw "You must provide an id to search for";
    if (id.trim() === "" || typeof id !== "string")
      throw "You must provide an id in string format";
    if (ObjectId(id.trim())) {
      id = ObjectId(id.trim());
    } else {
      throw "You must provide a valid Object Id";
    }
    if (!newTitle) throw "You must provide a title to edit the name";
    if (newTitle.trim() === "" || typeof newTitle !== "string")
      throw "You must provide a title in string format";

    const moviesCollection = await movies();
    const updatedDog = {
      title: newTitle,
    };

    const updatedInfo = await moviesCollection.updateOne(
      { _id: id },
      { $set: updatedDog }
    );
    if (updatedInfo.modifiedCount === 0) {
      throw "could not update movie successfully";
    }

    return await this.get(id.toString());
  },
};
