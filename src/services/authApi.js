import adminAxios from './adminAxios';

const authApi = {
  getInfo: async () => {
    const url = `auth/get-info`;
    return await adminAxios.get(url);
  },
  login: async (params) => {
    const url = `auth/login`;
    return await adminAxios.get(url, { params });
  },
  rigister: async (params) => {
    const url = `auth/register`;
    return await adminAxios.get(url, { params });
  },
};

export default authApi;
