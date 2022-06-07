import basicAxios from './basicAxios';

const tutorProfileApi = {
  getProfile: async (tutorId) => {
    const url = `tutors/profile/${tutorId}`;
    return await basicAxios.get(url);
  },

  updateProfile: async (tutorId) => {},
};

export default tutorProfileApi;
