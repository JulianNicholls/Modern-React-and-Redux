import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selected }) => {
  if (!selected) return <h4>Select a Song</h4>;
  return (
    <div>
      <h3>Details for</h3>
      <p>
        Title: {selected.title}
        <br />
        Duration: {selected.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selected }) => ({ selected });

export default connect(mapStateToProps)(SongDetail);
