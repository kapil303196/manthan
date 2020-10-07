let exportedMethods = {
  async aboutme() {
    const data = {
        name: "Manthan Patel",
        cwid: "10471493",
        biography: "My name is Manthan Patel. I’m a 23 year old boy. I live in Ahmedabad, India. My birthday is on 3rd august. I am pursuing master degree in computer science.\n My hobbies are reading story books, playing various games , listening music and watching movies. Cricket and football are my two favourite sports. I also have a deep intrest in gadgets and technology. My dream is to work for amazon someday in the future.",
        favoriteShows: ["Peaky Blinders", "Fargo", "Breaking Bad", "Money Heist"]
    }
    return data
  },
};

module.exports = exportedMethods;
