import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

const requestLogin = async (endpoint, body) => {
  const { email, password } = body;
  const { data } = await api.post(endpoint, { email, password });
  return data;
};

export default requestLogin;
