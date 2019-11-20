import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const StreamShow = ({ match, stream, getStream }) => {
  useEffect(() => {
    getStream(match.params.id);
  }, [getStream, match.params.id]);

  if (!stream) return <div>Loading...</div>;

  const { title, description } = stream;

  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamShow);
