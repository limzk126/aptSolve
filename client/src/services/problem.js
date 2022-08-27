import axios from 'axios';
const baseUrl = '/api/problems';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log('response', response);
  return response.data;
};

const create = async (newProblem) => {
  const response = await axios.post(baseUrl, newProblem);
  return response.data;
};

const update = async (modifiedProblem) => {
  const response = await axios.put(
    `${baseUrl}/${modifiedProblem.id}`,
    modifiedProblem
  );
  return response.data;
};

const deleteProblem = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  console.log('RESPONSEEEE', response);
  return response.data;
};

export default { getAll, create, update, deleteProblem };
