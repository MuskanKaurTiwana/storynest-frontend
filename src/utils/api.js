import axios from 'axios';

const API = axios.create({
  baseURL: 'https://storynest-backend-hthr.onrender.com/api',
  withCredentials: true, // Important for sending cookies (for auth)
});

export default API;