import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const StreamList = ({ streams, loadStreams }) => {
  useEffect(() => loadStreams(), [loadStreams]);

  const renderList = () => {
    return streams.map(stream => (
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

const mapStateToProps = ({ streams }) => ({ streams: Object.values(streams) });

export default connect(mapStateToProps, actions)(StreamList);
