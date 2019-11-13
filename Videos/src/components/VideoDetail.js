import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return <h2 class="ui segment">Loading...</h2>;

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="Video Player"
          src={`https://youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
