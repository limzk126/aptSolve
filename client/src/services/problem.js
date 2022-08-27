import axios from 'axios';
const baseUrl = '/api/problems';

let token;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  console.log('response', response);
  return response.data;
};

const create = async (newProblem) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newProblem, config);
  return response.data;
};

const update = async (modifiedProblem) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    `${baseUrl}/${modifiedProblem.id}`,
    modifiedProblem,
    config
  );
  return response.data;
};

const deleteProblem = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default { setToken, getAll, create, update, deleteProblem };
