import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const SongList = ({ songs, selected, selectSong }) => {
  console.log({ selected });

  return (
    <div className="ui divided list">
      {songs.map((song, idx) => (
        <div className="item" key={idx}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title} {song.duration}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  songs: state.songs,
  selected: state.selected,
});

export default connect(
  mapStateToProps,
  actions
)(SongList);
