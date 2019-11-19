import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const StreamEdit = ({ match, stream, getStream, updateStream }) => {
  useEffect(() => {
    getStream(match.params.id);
  }, [getStream, match.params.id]);

  return (
    <div>
      <h2>Stream Edit</h2>
      {stream ? (
        <div>
          {stream.title}, {stream.description}
        </div>
      ) : (
        'Undefined'
      )}
    </div>
  );
};

const mapStateToProps = ({ streams }, ownProps) => ({
  stream: streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, actions)(StreamEdit);
