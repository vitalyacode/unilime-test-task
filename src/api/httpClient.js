import axios from 'axios';
import { backendUrl } from '../constants/constants';

const httpClient = axios.create({
  baseURL: backendUrl,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('unilime_user_token');
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
export default httpClient;
