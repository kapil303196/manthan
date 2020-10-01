const movies = require("./data/movies");
let { ObjectId } = require("mongodb");

const connection = require("./config/mongoConnection");

const main = async () => {
  const billAndTed = await movies.create(
    "Bill and Ted Face the Music",
    "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
    "PG-13",
    "1hr 31min",
    "Comedy",
    ["Keanu Reeves", "Alex Winter"],
    { director: "Dean Parisot", yearReleased: 2020 }
  );
  console.log(billAndTed);

  console.log("Creating another movie of my choice");
  const Gunjan = await movies.create(
    "Gunjan Saxena",
    "Flight Lieutenant Gunjan Saxena (born 1975) is an Indian Air Force (IAF) officer and former helicopter pilot. its an autobiography",
    "PG-1",
    "2hr 1min",
    "Autobiography",
    ["Jahnvi Kapoor", "Manav Vij"],
    { director: "Sharan Sharma", yearReleased: 2020 }
  );
  //   console.log(Gunjan);

  console.log("Getting all the movies..");
  const allMovies = await movies.getAll();
  console.log(allMovies);

  console.log("Creating 3rd movie of my choice");
  const Don = await movies.create(
    "Don",
    "Drug mafia tries to escape from the police for the crime he did",
    "A-1",
    "2hr 15min",
    "Thriller",
    ["Shahrukh Khan", "Priyanka Chopra"],
    { director: "Farhan Akhtar", yearReleased: 2006 }
  );

  const thirdMovie = await movies.get(Don._id.toString());
  console.log(thirdMovie);

  const rename = await movies.rename(billAndTed._id.toString(), "Sacred Games");
  console.log(rename);

  const removeSecond = await movies.remove(Gunjan._id.toString());
  const updatedMovies = await movies.getAll();
  console.log(updatedMovies);

  //============== to check all the validations and errors uncomment each function one by one ===============//
  
  // const ErrorMovie = await movies.create(
  //   " ",
  //   "Drug mafia tries to escape from the police for the crime he did",
  //   "A-1",
  //   "2hr 15min",
  //   "Thriller",
  //   ["Shahrukh Khan", "Priyanka Chopra"],
  //   { director: "Farhan Akhtar", yearReleased: 2030 }
  // );
  // console.log(ErrorMovie)

  //   const errorRemoving = await movies.remove(ObjectId().toString())
  //   console.log(errorRemoving)

  //   const renameError = await movies.rename(
  //     ObjectId().toString(),
  //     "Sacred Games"
  //   );
  //   console.log(renameError);

  //   const renameError2 = await movies.rename(
  //     Don._id.toString(),
  //     " "
  //   );
  //   console.log(renameError2);

  //   const errorGet = await movies.get(ObjectId().toString());
  //   console.log(errorGet);
};

main().catch((error) => {
  console.log(error);
});
