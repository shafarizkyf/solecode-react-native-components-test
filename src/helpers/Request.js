/* eslint-disable no-console */
import axios from 'axios';
import api from '../routes/api';

const backend = async (method, url, data, params, headers = {}) => {
  try {
    const { data: result } = await axios({
      method,
      url: url.search('http') === -1 ? `${api.BASE_URL}${url}` : url,
      data,
      params,
      headers
    });

    return result;
  } catch (error) {
    console.log('err Request@backend: ', error);
  }
};

export default {
  backend
};
