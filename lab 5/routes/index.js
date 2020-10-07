const showsRoute = require('./shows');
const aboutmeRoute = require('./aboutme');

const constructorMethod = (app) => {
  app.use('/shows', showsRoute);
  app.use('/aboutme', aboutmeRoute);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;
