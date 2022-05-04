import axiosMy from './axiosMy';

const userApi = {
  getInfo: async (accessToken) => {
    const url = `user/get-info`;

    return await axiosMy.get(url, { headers: { Authorization: `Bearer ${accessToken.jwt}` } });
  },
  login: async (params) => {
    const url = `user/login`;
    const login = await axiosMy.get(url, { params });

    return login.data;
  },
};

export default userApi;
