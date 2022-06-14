import { AuthContextProps } from 'contexts/auth';

export const useUser = ({ authState, login, logout, setLoadingAuth }: AuthContextProps) => ({
  user: authState.user,
  isAuthenticated: Boolean(authState.user),
  isAuthenticating: authState.loading,
  login,
  logout,
  setLoadingAuth,
});
