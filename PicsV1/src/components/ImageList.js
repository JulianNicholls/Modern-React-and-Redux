import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div className="ui segment">
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
