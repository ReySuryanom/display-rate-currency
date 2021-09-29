import axios from 'axios';
import { useEffect, useState } from 'react';
import { CONFIG } from '../api';

const { PARAMS, BASE_URL, ENDPOINT } = CONFIG;

export const useFetch = () => {
  const [rates, setRates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ENDPOINT}${PARAMS}`)
      .then((response) => {
        const { rates } = response.data;

        setIsLoading(true);
        setRates(rates);
        setIsLoading(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return { rates, isLoading };
};
