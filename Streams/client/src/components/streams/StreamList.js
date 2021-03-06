import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const StreamList = ({ isLoggedIn, currentUserId, streams, loadStreams }) => {
  useEffect(() => {
    loadStreams();
  }, [loadStreams]);

  const renderAdmin = stream => {
    if (currentUserId !== stream.userId) return null;

    return (
      <div className="right floated content">
        <Link to={`/streams/edit/${stream.id}`} className="ui button tiny primary">
          <i className="edit icon"></i>
          Edit
        </Link>
        <Link
          to={`/streams/delete/${stream.id}`}
          className="ui button tiny negative"
        >
          <i className="trash alternate outline icon"></i>
          Delete
        </Link>
      </div>
    );
  };

  const renderList = () => {
    return streams.map(stream => (
      <div className="item" key={stream.id}>
        {renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
          </Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  };

  const renderCreate = () => {
    if (isLoggedIn)
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui small button primary">
            Create stream
          </Link>
        </div>
      );
  };
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = ({ auth, streams }) => ({
  streams: Object.values(streams),
  isLoggedIn: auth.isLoggedIn,
  currentUserId: auth.userId,
});

export default connect(mapStateToProps, actions)(StreamList);
