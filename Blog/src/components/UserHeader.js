import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  return <h4>{user ? user.name : 'Loading...'}</h4>;
};

const mapStateToProps = ({ users }, ownProps) => {
  return { user: users.find(({ id }) => id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
