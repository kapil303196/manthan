let exportedMethods = {
  async aboutme() {
    const data = {
        name: "Manthan Patel",
        cwid: "10471493",
        biography: "asdas asda sd ad asd   \n asdasd asdasdadasdasdasd",
        favoriteShows: ["Peaky Blinders", "Fargo", "Breaking Bad", "Money Heist"]
    }
    return data
  },
};

module.exports = exportedMethods;
