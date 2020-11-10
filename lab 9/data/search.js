const axios = require('axios');

const exportedMethods = {
  async getAllShows(data) {
    const response = await axios.get('http://api.tvmaze.com/search/shows?q='+data.searchTerm)
    return response.data.slice(0, 20);
  },
  async getShow(id) {
    const response = await axios.get('http://api.tvmaze.com/shows/'+id)
    console.log("res",response.data)
    return response.data
  },
};

module.exports = exportedMethods;
