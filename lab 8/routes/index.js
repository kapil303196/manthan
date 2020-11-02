const searchRoutes = require('./search');
const path = require('path');

const constructorMethod = (app) => {
  app.use('/', searchRoutes);

  app.use('*', (req, res) => {
    res.sendFile(path.resolve('static/404.html'));
  });
};

module.exports = constructorMethod;
