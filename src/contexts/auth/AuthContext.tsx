import { createContext } from 'react';
import { Auth, User } from 'data/models';

export type AuthContextProps = {
  authState: Auth;
  login: (user: User, token: string) => void;
  setLoadingAuth: (isSending: boolean) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
