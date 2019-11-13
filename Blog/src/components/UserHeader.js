import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const UserHeader = ({ userId, user, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);

  return <h4>{user ? user.name : 'Loading...'}</h4>;
};

const mapStateToProps = ({ users }, ownProps) => {
  return { user: users.find(({ id }) => id === ownProps.userId) };
};

export default connect(mapStateToProps, actions)(UserHeader);
