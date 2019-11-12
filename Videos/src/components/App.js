import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const App = () => {
  const startSearch = async term => {
    console.log({ term });

    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    console.log({ response });
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={startSearch} />
    </div>
  );
};

export default App;
