import { AUTH_LOG_IN, AUTH_LOG_OUT } from './types';

export const authLogin = () => {
  return { type: AUTH_LOG_IN };
};

export const authLogout = () => {
  return { type: AUTH_LOG_OUT };
};
