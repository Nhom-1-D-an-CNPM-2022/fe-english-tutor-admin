import axios from 'axios';
import queryString from 'query-string';
const baseURL = process.env.REACT_APP_URL_MY_API;
const token = localStorage.getItem('jwt');

const axiosMy = axios.create({
  baseURL: baseURL,
  headers: {
    'content-type': 'application/json',
    Authorization: token,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosMy.interceptors.response.use(
  (res) => {
    if (res.data.result === 0) {
      // logout(buildysURL + "");
    }
    return res;
  },
  (err) => {
    if (err.response?.status === 401) {
      // logout(buildysURL + "");
    }
    throw err;
  },
);

export default axiosMy;
