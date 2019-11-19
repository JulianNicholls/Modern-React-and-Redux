import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = ({ match, stream, getStream, updateStream }) => {
  useEffect(() => {
    getStream(match.params.id);
  }, [getStream, match.params.id]);

  const onSubmit = formValues => updateStream(stream.id, formValues);

  return (
    <div>
      <h2>Edit stream</h2>
      {stream ? (
        <StreamForm
          onSubmit={onSubmit}
          buttonText="Update stream"
          initialValues={stream}
        />
      ) : (
        <h3>Stream {match.params.id} not found</h3>
      )}
    </div>
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamEdit);
