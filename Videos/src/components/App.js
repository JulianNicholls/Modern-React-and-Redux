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
    setSelected(null);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={startSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="column eleven wide">
            <VideoDetail video={selected} />
          </div>
          <div className="column five wide">
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
