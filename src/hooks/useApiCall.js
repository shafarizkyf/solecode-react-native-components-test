import { useEffect, useState } from 'react';
import Request from '../helpers/Request';

const useApiCall = (request) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetchApis();
  }, []);

  const fetchApis = async () => {
    const { method, url, data, params, headers } = await request;
    const response = await Request.backend(method, url, data, params, headers);
    setResponse(response);
  };

  return response;
};

export default useApiCall;
