import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/64aaee46-302e-459c-83ed-a3c9e8ec5dcb',
  headers: { Authorization: 'token 8e81fe11efe2e9f25c29f2304971e633fbf1d405'}
});

export default api;