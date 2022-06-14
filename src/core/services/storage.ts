import { User } from 'data/models';

const API_TOKEN = 'ENDEAVOR_TOKEN';
const API_USER = 'ENDEAVOR_USER';

export const getApiToken = () => sessionStorage.getItem(API_TOKEN) ?? '';
export const setApiToken = (token: string) => sessionStorage.setItem(API_TOKEN, token);
export const deleteApiToken = () => sessionStorage.removeItem(API_TOKEN);

export const getApiUser = (): User =>
  JSON.parse(sessionStorage.getItem(API_USER) as string) as User;

export const setApiUser = (user: User) => sessionStorage.setItem(API_USER, JSON.stringify(user));

export const deleteApiUser = () => sessionStorage.removeItem(API_USER);

export const cleanStorage = () => {
  if (typeof window !== 'undefined') {
    deleteApiToken();
    deleteApiUser();
  }
};
