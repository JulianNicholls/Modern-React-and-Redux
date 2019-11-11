import React from 'react';
import { connect } from 'react-redux';

const SongList = ({ songs }) => {
  return (
    <div className="ui divided list">
      {songs.map(({ title, duration }, idx) => (
        <div className="item" key={idx}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">
            {title} {duration}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  songs: state.songs,
});

export default connect(mapStateToProps)(SongList);
