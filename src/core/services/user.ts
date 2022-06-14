import { ApiResponse, LoginData } from 'data/models';
import axios from '../config/api';

export const loginUser = async (data: LoginData): Promise<ApiResponse> =>
  axios.post('/user/login', data);
