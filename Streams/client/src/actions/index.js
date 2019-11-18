import { AUTH_LOG_IN, AUTH_LOG_OUT } from './types';

import streams from '../apis/streams';

// Auth
export const authLogin = userId => {
  return { type: AUTH_LOG_IN, userId };
};

export const authLogout = () => {
  return { type: AUTH_LOG_OUT };
};

// Streams
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
