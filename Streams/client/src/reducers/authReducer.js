import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: null,
  //  email: null,
};

export default (auth = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOG_IN:
      return { ...auth, isLoggedIn: true };

    case AUTH_LOG_OUT:
      return { isLoggedIn: false };

    default:
      return auth;
  }
};
