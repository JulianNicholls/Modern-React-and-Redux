import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';

import * as actions from '../../actions';

const StreamDelete = ({ match, stream, getStream, deleteStream }) => {
  useEffect(() => {
    getStream(match.params.id);
  }, [getStream, match.params.id]);

  return (
    <div>
      <h2>Delete stream</h2>
      <Modal />
    </div>
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamDelete);
