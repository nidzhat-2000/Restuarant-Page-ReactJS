import { useState } from 'react';
import { useEffect } from 'react';
import nameIssuesFixer from './nameFixer';

export default function useDataProvider(
  data,
  property,
  providing,
  link,
  dependency2
) {
  const [providedData, setProvidedData] = useState([]);

  useEffect(() => {
    setProvidedData(
      data?.find(
        each => each?.[property] === nameIssuesFixer(link).toUpperCase()
      )?.[providing]
    );
  }, [data, dependency2]);

  return { providedData };
}
