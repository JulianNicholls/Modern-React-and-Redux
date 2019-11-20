import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import * as actions from '../../actions';
import history from '../../history';

const StreamDelete = ({ match, stream, getStream, deleteStream }) => {
  useEffect(() => {
    getStream(match.params.id);
  }, [getStream, match.params.id]);

  const onDismiss = () => history.push('/');

  const onDelete = () => deleteStream(stream.id);

  const renderActions = () => (
    <>
      <button onClick={onDelete} className="ui button negative">
        <i className="trash alternate outline icon"></i>
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) return 'Are you sure that you want to delete the stream?';
    else
      return `Are you sure that you want to delete the stream called ${stream.title}?`;
  };

  return (
    <Modal
      header="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={onDismiss}
    />
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamDelete);
