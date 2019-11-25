import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div style={{ margin: '0.5rem 0 1rem 0' }}>
        <button
          className="ui button primary"
          onClick={() => {
            console.log('posts');
            setResource('posts');
          }}
        >
          Posts
        </button>
        <button
          className="ui button primary"
          onClick={() => {
            console.log('todos');
            setResource('todos');
          }}
        >
          Tasks
        </button>
      </div>
      <div className="ui grid">
        <div className="eight wide column">
          <ResourceList resource={resource} />
        </div>
        <div className="eight wide column">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default App;
