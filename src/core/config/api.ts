import axios, { AxiosError, AxiosResponse } from 'axios';
import { getApiToken } from 'services/storage';

const backendURL = (process.env.BACKEND_URL ??= '');

const axiosInstance = axios.create({
  baseURL: `${backendURL}/api/`,
});

axiosInstance.interceptors.request.use(request => {
  const token = getApiToken();

  if (token) {
    const authorization = `Bearer ${getApiToken()}`;
    request.headers = {
      ...request.headers,
      Authorization: authorization,
    };
  }

  return request;
});

axios.interceptors.response.use(
  (successfulReq: AxiosResponse) => successfulReq.data as unknown,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      // console.log('Unauthorized');
    } else {
      // Something wrong happened, more handlers could be added
      // console.log('Error', error.message);
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.reject(error);
  }
);

export default axios;
