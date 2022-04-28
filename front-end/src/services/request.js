import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const requestLogin = async (endpoint, body) => {
  const { email, password } = body;
  const { data } = await api.post(endpoint, { email, password });
  return data;
};

export const createUser = async (endpoint, body) => {
  try {
    await api.post(endpoint, body);
    return true;
  } catch (error) {
    return false;
  }
};

export default requestLogin;
