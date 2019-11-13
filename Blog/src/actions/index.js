import jsonplaceholder from '../api';

import { FETCH_POSTS } from './types';

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: FETCH_POSTS, posts: response.data });
};
