import axios from 'axios';

import { API_URL } from '../config';
import { responseError } from './interceptors';

const baseConfig = {
  baseURL: `${API_URL}/`,
};

const client = axios.create(baseConfig);
client.interceptors.response.use(responseError);

export default client;
