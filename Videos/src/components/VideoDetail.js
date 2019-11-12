import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return null;

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
