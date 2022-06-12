import adminAxios from './adminAxios';

const tutorProfileApi = {
  getProfile: async (tutorId) => {
    const url = `tutors/profile/${tutorId}`;
    return await adminAxios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },

  approveProfile: async (tutorId) => {
    const url = `tutors/profile/approve/${tutorId}`;
    return await adminAxios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      },
    );
  },

  rejectProfile: async (tutorId) => {
    const url = `tutors/profile/reject/${tutorId}`;
    return await adminAxios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      },
    );
  },
};

export default tutorProfileApi;
