import base64 from "react-native-base64";
import md5 from "md5";
import Storage from "../helpers/Storage";

export const BASE_URL = 'https://apptmcdev.solecode.tech:8443';
export const CLIENT_ID = 'mobile_app_customer';

export const getToken = async () => {
  return await Storage.get('token');
};

export const login = (email = '', password = '') => ({
  url: `${BASE_URL}/GACS_Command_Center/services/javaLogin/login`,
  method: 'GET',
  data: null,
  params: null,
  headers: {
    'Authorization': `Basic ${base64.encode(`${email}:${md5(password)}`)}`,
    'ClientId': CLIENT_ID
  }
});

export const profile = async (customerId) => ({
  url: `${BASE_URL}/GACS_Command_Center/services/ga_gacs/queryExecutor/queries/GetUserProfile`,
  method: 'GET',
  data: null,
  params: {
    CustomerId: customerId
  },
  headers: {
    'WM_AUTH_TOKEN': await getToken(),
    'ClientId': CLIENT_ID
  }
});

export const updateProfile = async (data) => ({
  url: `${BASE_URL}/GACS_Command_Center/services/ga_gacs/queryExecutor/queries/UpdateEditAccount`,
  method: 'PUT',
  data: data,
  params: null,
  headers: {
    'WM_AUTH_TOKEN': await getToken()
  }
});

export const getFamilyMember = async (userId) => ({
  url: `${BASE_URL}/GACS_Command_Center/services/javaGet/listAnggotaKeluarga`,
  method: 'GET',
  data: null,
  params: {
    UserId: userId
  },
  headers: {
    'WM_AUTH_TOKEN': await getToken()
  }
});

export const addFamilyMember = async (formData) => ({
  url: `${BASE_URL}/GACS_Command_Center/services/javaInsertServices/insertMstFamilyMember`,
  method: 'POST',
  data: formData,
  params: null,
  headers: {
    'Content-Type': 'multipart/form-data',
    'WM_AUTH_TOKEN': await getToken(),
    'ClientId': CLIENT_ID
  }
});
