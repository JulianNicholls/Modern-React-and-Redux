import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = ({ createStream }) => {
  const onSubmit = formValues => createStream(formValues);

  return (
    <div>
      <h2>Create a stream</h2>
      <StreamForm onSubmit={onSubmit} buttonText="Create stream" />
    </div>
  );
};

export default connect(null, actions)(StreamCreate);
