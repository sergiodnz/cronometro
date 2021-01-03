import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/',
  timeout: 1000 * 120,
});

export default instance;
