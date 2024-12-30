import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  params: {
    apikey: process.env.API_KEY,
    formato: 'json',
  },
});

const get = (url: string) => api.get(url);

export { get };
