import basicAxios from './basicAxios';
import adminAxios from './adminAxios';

const manageUserApi = {
  getAllUser: async (params) => {
    const url = `users/get-all`;
    return await basicAxios.get(url, { params });
  },
  updateAccount: async (requestOption) => {
    const url = `account/update`;
    return await adminAxios.patch(url, requestOption);
  },
  getListTutors: async (params) => {
    const url = `tutors/get-reviewed-profiles`;
    return await basicAxios.get(url, { params });
  },
  approveTutor: async (requestOption) => {
    const url = `tutors/approve-profile`;
    return await basicAxios.put(url, requestOption);
  },
};

export default manageUserApi;
