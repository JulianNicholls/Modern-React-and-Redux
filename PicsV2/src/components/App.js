import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

import unsplash from '../api/unsplash';

const App = () => {
  const [images, setImages] = useState([]);

  const loadImages = async query => {
    const response = await unsplash.get('/search/photos', {
      params: { query, per_page: 15 },
    });

    setImages(
      response.data.results.map(({ id, urls, description }) => ({
        id,
        urls,
        description,
      }))
    );
  };

  return (
    <div className="ui container" style={{ marginTop: '1rem' }}>
      <SearchBar onSubmit={loadImages} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
