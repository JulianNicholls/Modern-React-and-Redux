import { combineReducers } from 'redux';

import { SELECT_SONG } from '../actions/types';

const songlist = () => [
  { title: 'Smells Like Teen Spirit', duration: '4:05' },
  { title: 'Macarena', duration: '3:15' },
  { title: 'I Want It That Way', duration: '4:21' },
  { title: 'Fat Bottomed Girls', duration: '3:52' },
  { title: 'Bohemian Rhapsody', duration: '7:20' },
];

const selection = (selected = null, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return action.song;

    default:
      return selected;
  }
};

export default combineReducers({
  songs: songlist,
  selected: selection,
});
