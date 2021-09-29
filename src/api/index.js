const API_KEY = process.env.REACT_APP_API_KEY;

export const CONFIG = {
  PARAMS: `?access_key=${API_KEY}&symbols=CAD,IDR,JPY,CHF,EUR,USD`,
  BASE_URL: 'http://api.exchangeratesapi.io/v1/',
  ENDPOINT: 'latest',
};
