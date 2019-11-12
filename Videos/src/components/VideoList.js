import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos }) => {
  return (
    <div className="ui relaxed divided list video-list">
      {videos.map(video => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
};

export default VideoList;
