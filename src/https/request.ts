import axios from 'axios';
import { getToken } from '@/utils/auth/token.ts';

const config = {
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 3000,
};

const service = axios.create(config);

service.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;
