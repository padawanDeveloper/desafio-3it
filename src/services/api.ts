import axios from 'axios';

const BASE_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: '9037b241dd8498d8d75c7769100167d63e773a14',
    formato: 'json',
  },
});

const get = (url: string) => api.get(url);

export { get };
