import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(image => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
};

export default ImageList;
