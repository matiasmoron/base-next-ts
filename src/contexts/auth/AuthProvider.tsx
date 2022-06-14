import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { Auth } from 'models/auth';
import { User } from 'models/user';
import { cleanStorage, getApiToken, getApiUser, setApiToken, setApiUser } from 'services/storage';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';

const INITIAL_STATE: Auth = {
  user: null,
  token: '',
  loading: false,
  errorMessage: '',
};

interface UserProviderProps {
  children: JSX.Element | Array<JSX.Element>;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [authState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const user: User = getApiUser();
    const token = getApiToken();

    dispatch({ type: 'LOGIN', payload: { user, token, loading: false, errorMessage: '' } });
  }, []);

  const login = (user: User, token: string) => {
    dispatch({ type: 'LOGIN', payload: { user, token, loading: false, errorMessage: '' } });
    setApiUser(user);
    setApiToken(token);
  };

  const logout = useCallback(() => {
    dispatch({
      type: 'LOGOUT',
      payload: { user: null, token: '', loading: false, errorMessage: '' },
    });

    cleanStorage();
  }, []);

  const setLoadingAuth = useCallback(
    (isSending: boolean) => {
      dispatch({ type: 'REQUEST_LOGIN', payload: { ...authState, loading: isSending } });
    },
    [authState]
  );

  const values = useMemo(
    () => ({
      authState,
      login,
      setLoadingAuth,
      logout,
    }),
    [authState, setLoadingAuth, logout]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
