import jsonplaceholder from '../api';

import { FETCH_POSTS, FETCH_USER } from './types';

// Post actions
export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: FETCH_POSTS, posts: response.data });
};

// User actions
export const fetchUser = id => async (dispatch, getState) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: FETCH_USER, user: response.data });
};
