import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: null,
  userId: null,
};

export default (auth = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOG_IN:
      return { isLoggedIn: true, userId: action.userId };

    case AUTH_LOG_OUT:
      return { isLoggedIn: false, userId: null };

    default:
      return auth;
  }
};
