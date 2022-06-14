import { Auth } from 'data/models';

type AuthAction =
  | { type: 'LOGIN'; payload: Auth }
  | { type: 'LOGOUT'; payload: Auth }
  | { type: 'REQUEST_LOGIN'; payload: Auth };

export const AuthReducer = (state: Auth, action: AuthAction): Auth => {
  const { type, payload } = action;

  switch (type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN':
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: '',
      };

    default:
      return state;
  }
};
