import axiosMy from './axiosMy';

const userApi = {
  getInfo: async () => {
    const url = `user/get-info`;
    return await axiosMy.get(url);
  },
  login: async (params) => {
    const url = `user/login`;
    return await axiosMy.get(url, { params });
  },
  rigister: async (params) => {
    const url = `user/rigister`;
    return await axiosMy.get(url, { params });
  },
};

export default userApi;
