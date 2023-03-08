import axios from 'axios';
import { baseURL } from 'utils/constants';

export const Api = axios.create({
  baseURL: baseURL,
});
