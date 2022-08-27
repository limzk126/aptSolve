const bcrypt = require('bycrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.post('/', async (request, response) => {
  const { username, password } = request.body;
  if (password === undefined) {
    return response.status(400).json({
      error: 'Password is required',
    });
  }
  if (password.length < 3) {
    return response.status(400).json({
      error: 'Password must be at least 3 characters',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    passwordHash,
  });

  const createdUser = await user.save();
  response.status(201).json(createdUser);
});

module.exports = usersRouter;
