import React from 'react';

import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Users</h2>
      <ul>
        {users.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
