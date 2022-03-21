import axios from 'axios';
import api from '../routes/api';

const backend = async (method, url, data, params, headers = {}) => {
  try {
    const { data: result } = await axios({
      method,
      url: url.search('http') === -1 ? `${api.BASE_URL}${url}` : url,
      data,
      params,
      headers,
      withCredentials: method.toUpperCase() === 'GET'
    });

    return result;
  } catch (error) {
    if (error.response?.status === 500) {
      console.log('error backend', JSON.stringify(error.response.data));
    } else {
      console.log('err Request@backend: ', error);
    }
  }
};

export const fetchApi = async (request) => {
  const { method, url, data, params, headers } = await request;
  return await backend(method, url, data, params, headers);
};

export default {
  backend
};
