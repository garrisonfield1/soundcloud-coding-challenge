import { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [isResolved, setIsResolved] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsResolved(false);
      const response = await fetch(url);
      
      if(response.status === 200){
        const json = await response.json();
        setData(json);
        setIsResolved(true);
      }else{
        throw response;
      }
    };
    fetchData();
    
  }, [url]);
  return { isResolved, data };
};

export default useFetch;
