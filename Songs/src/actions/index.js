import { SELECT_SONG } from './types';

export const selectSong = song => ({
  type: SELECT_SONG,
  song,
});
