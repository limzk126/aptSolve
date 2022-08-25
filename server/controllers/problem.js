const problemRouter = require('express').Router();
const Problem = require('../models/problem');

problemRouter.get('/', async (request, response) => {
  const problems = await Problem.find({});

  response.json(problems);
});

problemRouter.post('/', async (request, response) => {
  const problem = new Problem({
    ...request.body,
  });

  const newProblem = await problem.save();
  response.status(201).json(newProblem);
});

problemRouter.put('/:id', async (request, response) => {
  const updatedProblem = await Problem.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  );

  return response.status(200).json
});

module.exports = problemRouter;
