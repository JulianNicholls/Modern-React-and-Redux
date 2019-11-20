import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import * as actions from '../../actions';

const StreamShow = ({ match, stream, getStream }) => {
  const videoRef = useRef();
  const player = useRef(null);

  const buildPlayer = () => {
    if (player.current || !stream) return;

    player.current = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${stream.id}.flv`,
    });

    player.current.attachMediaElement(videoRef.current);
    player.current.load();
    console.log('player built');
  };

  useEffect(() => {
    const { id } = match.params;

    if (!stream) getStream(id);

    buildPlayer();

    return () => {
      console.log('Cleaning up');
      if (player.current) {
        player.current.destroy();
        player.current = null;
      }
    };
  });

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      {stream ? (
        <>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamShow);
