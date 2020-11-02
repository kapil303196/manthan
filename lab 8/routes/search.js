const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.search;

router.get('/', async (req, res) => {
  res.render('shows/new');
});

router.get('/search', async (req, res) => {
  let data = req.query;
  let errors = [];

  if (!data.searchTerm.trim()) {
    errors.push('No searchTerm provided');
  }


  if (errors.length > 0) {
    res.render('shows/new', {
      errors: errors,
      hasErrors: true,
    });
    return;
  }
  console.log("inside",data)
  const showsList = await postData.getAllShows(data);
  console.log("list",showsList.length)
  if(showsList.length) {
    res.render('shows/index', { shows: showsList });
  } else {
    res.render('shows/index', { query: data });
  }
});

router.get('/shows/:id', async (req, res) => {
  let id = req.params.id;
  console.log("inside",id)
  const show = await postData.getShow(id);
  res.render('shows/single', { show: show });
});


module.exports = router;
