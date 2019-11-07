import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ImageDisplay from './ImageDisplay';

import unsplash from '../api/unsplash';

const App = () => {
  const [images, setImages] = useState([]);

  const loadImages = async query => {
    console.log({ query });

    const response = await unsplash.get('/search/photos', {
      params: { query, per_page: 15 },
    });

    console.log({ response });

    setImages(response.data.results.map(({ urls }) => urls));
  };

  return (
    <div className="ui container" style={{ marginTop: '1rem' }}>
      <SearchBar onSubmit={loadImages} />
      Found: {images.length} images
      <ImageDisplay images={images} />
    </div>
  );
};

export default App;
