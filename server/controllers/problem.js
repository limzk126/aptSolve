const problemRouter = require('express').Router();
const Problem = require('../models/problem');

problemRouter.get('/', async (request, response) => {
    const problems = await Problem.find({});

    return response.json(problems);
});

problemRouter.post('/', async (request, response) => {
  const problem = new Problem({
    ...request.body,
  });

  const newProblem = await problem.save();
  response.status(201).json(newProblem);
});

module.exports = problemRouter;
