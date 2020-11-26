import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/7cb14246-1eee-417c-8197-c37eb2fce105?=',
  headers: { Authorization: 'token 8e81fe11efe2e9f25c29f2304971e633fbf1d405'}
});

export default api;