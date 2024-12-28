import axios from 'axios';

const BASE_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

const api = axios.create({
  baseURL: BASE_URL,
});

const get = (url: string) => api.get(url);

export { get };
