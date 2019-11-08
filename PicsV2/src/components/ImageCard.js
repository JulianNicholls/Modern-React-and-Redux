import React, { useRef, useEffect } from 'react';

const ImageCard = ({ image }) => {
  const { description, urls } = image;
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current.addEventListener('load', () => {
      const height = imgRef.current.clientHeight;
      const span = Math.ceil(height / 10 + 1);

      imgRef.current.style.gridRowEnd = `span ${span}`;
    });
  }, []);

  return <img ref={imgRef} src={urls.regular} alt={description} />;
};

export default ImageCard;
