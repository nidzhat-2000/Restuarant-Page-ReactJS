import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(path = '', query, route = undefined) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (path, query) => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${path}data/${query}.json`);
        if (data) {
          setIsLoading(false);
          setData(data);
        } else {
          setIsLoading(false);
          setData([]);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    getData(path, query);
  }, [query, route]);

  return { data, isLoading };
}
