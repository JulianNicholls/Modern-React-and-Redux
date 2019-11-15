import { AUTH_LOG_IN, AUTH_LOG_OUT } from './types';

export const authLogin = userId => {
  return { type: AUTH_LOG_IN, userId };
};

export const authLogout = () => {
  return { type: AUTH_LOG_OUT };
};
