import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(url);
      if(response.status === 200){
        const data = await response.json();
        setData(data);
        setStatus('200 fetched');
      }else{
        throw response;
      }
    };
    fetchData();
  }, [url]);

  return { status, data };
};

export default useFetch;
