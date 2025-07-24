import axios from 'axios';

const API = axios.create({
  baseURL: 'http://storynest-backend-hthr.onrender.com/api',
});

export default API;
