import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const NYT_API_KEY = 'hzaRhsoenMSIgkIeGepT7bjPXACaDtyi';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    'api-key': NYT_API_KEY,
  },
});
