import { FETCH_POSTS } from '../actions/types';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;

    default:
      return posts;
  }
};
