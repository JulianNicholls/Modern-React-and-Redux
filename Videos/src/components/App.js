import React, { useState } from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const startSearch = async term => {
    const response = await youtube.get('/search', { params: { q: term } });

    setVideos(response.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={startSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="column ten wide">
            <VideoDetail video={selected} />
          </div>
          <div className="column six wide">
            <VideoList
              videos={videos}
              onVideoSelect={video => setSelected(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
