import {
  LOAD_STREAMS,
  CREATE_STREAM,
  GET_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from '../actions/types';

export default (streams = {}, action) => {
  switch (action.type) {
    case LOAD_STREAMS:
      return action.streams.reduce(
        (acc, stream) => ({ ...acc, [stream.id]: stream }),
        streams // or {}, since we fetched all the streams anyway
      );

    case GET_STREAM:
    case CREATE_STREAM:
    case UPDATE_STREAM:
      const { stream } = action;

      return { ...streams, [stream.id]: stream };

    case DELETE_STREAM:
      const updatedStreams = { ...streams };
      delete updatedStreams[action.id];

      return updatedStreams;

    default:
      return streams;
  }
};
