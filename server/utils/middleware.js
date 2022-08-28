const User = require('../models/user');

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted values' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const userExtractor = async (request, response, next) => {
  const authorization = request.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    const decodedToken = jwt.verify(
      authorization.substring(7),
      process.env.SECRET
    );
    if (decodedToken) {
      request.user = await User.findById(decodedToken.id);
    }
  }

  next();
};

module.exports = {
  errorHandler,
  userExtractor,
};
