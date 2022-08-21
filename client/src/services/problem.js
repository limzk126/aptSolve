import axios from 'axios';
const baseUrl = '/api/problems';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newProblem) => {
  const response = await axios.post(baseUrl, newProblem);
  return response.data;
};

export default { getAll, create };
