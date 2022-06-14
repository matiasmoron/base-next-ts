import axios from 'axios';

const BACKEND_URL = (process.env.BACKEND_URL ??= '');

axios.defaults.baseURL = `${BACKEND_URL}/api/`;

axios.interceptors.request.use(request => request);

axios.interceptors.response.use(
  successfulReq => successfulReq.data as unknown,
  err => Promise.reject(err)
);

export default axios;
