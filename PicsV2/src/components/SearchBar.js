import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const setSearchTerm = event => {
    event.preventDefault();

    onSubmit(searchText);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={setSearchTerm}>
        <div className="field">
          <label htmlFor="search-text">Image Search</label>
          <input
            id="search-text"
            type="text"
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
