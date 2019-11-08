import React from 'react';

import './ImageList.css';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(({ id, urls, description }) => (
        <img
          className="ui image large spaced"
          key={id}
          src={urls.regular}
          alt={description}
        />
      ))}
    </div>
  );
};

export default ImageList;
