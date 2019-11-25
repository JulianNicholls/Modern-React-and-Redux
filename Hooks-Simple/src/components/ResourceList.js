import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const loadResources = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    };

    loadResources();
  }, [resource]);

  return (
    <div>
      {resource} ({resources.length})
    </div>
  );
};

export default ResourceList;
