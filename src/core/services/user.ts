import { ApiResponse, LoginData } from 'data/models';
import axios from '../config/api';

const baseURL = '/user';

export const loginUser = async (data: LoginData): Promise<ApiResponse> =>
  axios.post(`${baseURL}/login`, data);
