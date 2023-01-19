import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data) {
          setData(data);
        } else {
          setData([]);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    getData();
  }, [url]);

  return { data };
}
