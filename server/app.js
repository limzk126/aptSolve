const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('express-async-errors');

const config = require('./utils/config');
const logger = require('./utils/logger');
const problemRouter = require('./controllers/problem');
const middleware = require('./utils/middleware');

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Successfully connected to MongoDB');
  })
  .catch((err) => {
    logger.error('Failed to connect to MongoDB:', err);
  });

app.use(cors());
app.use(express.json());
app.get('/', (request, response) => {
  response.send('<h1>The server is running.</h1>');
});
app.use('/api/problems', problemRouter);
app.use(middleware.errorHandler);

module.exports = app;
