import axios from 'axios';

axios.defaults.baseURL = `${process.env.BACKEND_URL}/api/`;

axios.interceptors.request.use((request) => request);

axios.interceptors.response.use(
  (successfulReq) => successfulReq.data,
  (err) => Promise.reject(err)
);

axios.handleError = (error) => {
  const {
    response: { data },
  } = error;
  console.log('handleError', data);
};

export default axios;
