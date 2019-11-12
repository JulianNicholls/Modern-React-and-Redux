import React from 'react';

import './VideoItem.css';

const VideoItem = ({ onVideoSelect, video }) => {
  const { thumbnails, title } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
