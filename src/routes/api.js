import Storage from "../helpers/Storage";

export const BASE_URL = '';

export const getToken = async () => {
  return await Storage.get('token');
};

export const login = (email = '', password = '') => ({
  url: `${BASE_URL}/login`,
  method: 'GET',
  data: null,
  params: null,
  headers: null
});

export const profile = async (customerId) => ({
  url: `${BASE_URL}/profile`,
  method: 'GET',
  data: null,
  params: null,
  headers: {
    'token': await getToken()
  }
});
