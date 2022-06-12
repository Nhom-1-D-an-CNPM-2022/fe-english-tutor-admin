import adminAxios from './adminAxios';

const manageUserApi = {
  getAllUsers: async (params) => {
    const url = 'users/';
    return await adminAxios.get(url, { params });
  },
  updateAccount: async (requestOption) => {
    const url = `users/account/update/${requestOption._id}`;
    return await adminAxios.put(url, requestOption);
  },
  getAllReviewedTutorProfiles: async (params) => {
    const url = 'tutors/profile/';
    return await adminAxios.get(url, { params });
  },
};

export default manageUserApi;
