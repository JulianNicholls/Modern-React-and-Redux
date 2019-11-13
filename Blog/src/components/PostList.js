import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    console.log('Loading Posts in PostList');
    fetchPosts();
  }, [fetchPosts]);

  return <div>Post List ({posts.length})</div>;
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, actions)(PostList);
