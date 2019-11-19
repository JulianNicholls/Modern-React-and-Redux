import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import StreamForm from './StreamForm';

// Because I pass the whole stream into the StreamForm, I get it back again,
// which means that a PUT works, but I have changed it to PATCH anyway.

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
        <p>Stream {match.params.id} not found</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamEdit);
