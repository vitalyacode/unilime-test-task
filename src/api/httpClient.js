import axios from 'axios';
import { backendUrl } from '../constants/constants';

const httpClient = axios.create({
  baseURL: backendUrl,
});

export const setUpInterceptor = (store) => {
  httpClient.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.access_token;
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
};
export default httpClient;
