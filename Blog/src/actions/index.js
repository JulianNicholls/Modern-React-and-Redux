import jsonplaceholder from '../api';

import { FETCH_POSTS, FETCH_USER } from './types';

// Post actions
export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: FETCH_POSTS, posts: response.data });
};

// User actions
export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: FETCH_USER, user: response.data });
};

// Composite Actions
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = new Set(getState().posts.map(({ userId }) => userId));

  userIds.forEach(id => dispatch(fetchUser(id)));
};

// This DOESN'T WORK because of the asynchronous nature.
// The idea was that if the user was already in the users array in the store then
// don't reload it by default. The problem is that all of the requests are made before
// any of them completes, so the array is empty every time this looks.
// DAMN!
// export const fetchUser = (id, override = false) => {
//   return async (dispatch, getState) => {
//     if (!override && getState().users.find(user => user.id === id)) return;
//
//     const response = await jsonplaceholder.get(`/users/${id}`);
//
//     dispatch({ type: FETCH_USER, user: response.data });
//   };
// };
