const axios = require("axios");

let exportedMethods = {
  async getAllShows() {
    const data = await axios.get("http://api.tvmaze.com/shows")
    return data
  },
  async getShowById(id) {
    const data = await axios.get("http://api.tvmaze.com/shows/"+id)
    return data
  },
};

module.exports = exportedMethods;
