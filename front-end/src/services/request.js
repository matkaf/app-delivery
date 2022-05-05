import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
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
    console.log(error.message);
    return false;
  }
};

export const getSales = async (endpoint) => {
  try {
    const sales = await api.get(endpoint);

    return { status: true, sales };
  } catch (error) {
    return { status: false, error: error.message };
  }
};
