import { FETCH_USER } from '../actions/types';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...users, action.user];

    default:
      return users;
  }
};
