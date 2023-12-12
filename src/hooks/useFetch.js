import { useState } from 'react';

const useFetch = () => {
    
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [data,setData] = useState(0);

  const fetchApi = async ({endpoint, dataUser, headersUser = {}}) => {
    const headers = { 'Content-Type': 'application/json' };
    setLoading(true);

    const body = {
      method : dataUser ? 'POST' : 'GET',
      body : dataUser && JSON.stringify(dataUser),
      headers : {...headers, ...headersUser}
    };

    try {
      const res = await fetch(endpoint,body);
      const data = await res.text();
      setData(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return {
    loading,
    error,
    data,
    fetchApi
  };

};

export default useFetch;