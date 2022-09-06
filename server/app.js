const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('express-async-errors');

const config = require('./utils/config');
const logger = require('./utils/logger');
const loginRouter = require('./controllers/login');
const problemRouter = require('./controllers/problem');
const usersRouter = require('./controllers/user');
const middleware = require('./utils/middleware');

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Successfully connected to MongoDB');
  })
  .catch((err) => {
    logger.error('Failed to connect to MongoDB:', err);
  });

app.use(express.static('build'));
app.use(cors());
app.use(express.json());
app.use(middleware.userExtractor);
app.use('/api/login', loginRouter);
app.use('/api/problems', problemRouter);
app.use('/api/users', usersRouter);
app.use(middleware.errorHandler);

module.exports = app;
