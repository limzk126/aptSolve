const problemRouter = require('express').Router();
const { findById, findByIdAndDelete } = require('../models/problem');
const Problem = require('../models/problem');

problemRouter.get('/', async (request, response) => {
  if (!request.user) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }
  const problems = await Problem.find({ user: request.user.id }).populate(
    'user',
    { username: 1 }
  );
  response.json(problems);
});

problemRouter.post('/', async (request, response) => {
  if (!request.user) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }

  const user = request.user;
  const problem = new Problem({
    ...request.body,
    user: user.id,
  });

  const savedProblem = await problem.save();
  user.problems = user.problems.concat(savedProblem._id);
  await user.save();

  const problemToReturn = await Problem.find({
    user: savedProblem.id,
  }).populate('user', { username: 1 });

  response.status(201).json(problemToReturn);
});

problemRouter.put('/:id', async (request, response) => {
  const updatedProblem = await Problem.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  ).populate('user', { username: 1 });

  return response.status(200).json(updatedProblem);
});

problemRouter.delete('/:id', async (request, response) => {
  const deletedProblem = await Problem.findByIdAndDelete(request.params.id);
  if (deletedProblem) {
    return response.status(204).end();
  }
});

module.exports = problemRouter;
