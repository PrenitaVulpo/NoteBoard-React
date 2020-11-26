//
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/bf9527f3-89e6-4559-8410-d0798aad271d',
  headers: { Authorization: 'token 8e81fe11efe2e9f25c29f2304971e633fbf1d405'}
});

export default api;