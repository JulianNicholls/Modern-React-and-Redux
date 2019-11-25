import React from 'react';

import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{resource}</h2>
      <ul>
        {resources.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
