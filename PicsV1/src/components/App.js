import React from 'react';

import SearchBar from './SearchBar';

const App = () => {
  const setSearchTerm = term => {
    console.log({ term });
  };

  return (
    <div className="ui container" style={{ marginTop: '1rem' }}>
      <SearchBar onSubmit={setSearchTerm} />
    </div>
  );
};

export default App;
