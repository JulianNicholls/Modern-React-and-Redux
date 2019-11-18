import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  LOAD_STREAMS,
  CREATE_STREAM,
  GET_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from './types';

import streams from '../apis/streams';

// Auth
export const authLogin = userId => {
  return { type: AUTH_LOG_IN, userId };
};

export const authLogout = () => {
  return { type: AUTH_LOG_OUT };
};

// Streams
export const loadStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: LOAD_STREAMS, streams: response.data });
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, stream: response.data });
};

export const getStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: GET_STREAM, stream: response.data });
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: UPDATE_STREAM, stream: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, id });
};
