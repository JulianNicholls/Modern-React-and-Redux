import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('tasks')}>Tasks</button>
      </div>
      <h2 style={{ textAlign: 'center' }}>{resource}</h2>
    </div>
  );
};

export default App;
