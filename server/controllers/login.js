const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginRouter = require('express').Router();
const User = require('../models/user');

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });
  const isPasswordCorrect =
    user === null ? false : bcrypt.compare(password, user.passwordHash);

  if (!isPasswordCorrect) {
    return response.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  delete userForToken.passwordHash;

  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).json({ token, username });
});

module.exports = loginRouter;
