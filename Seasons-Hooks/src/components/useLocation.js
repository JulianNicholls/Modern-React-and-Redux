import { useState, useEffect } from 'react';

const useLocation = () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setCoords(position.coords),
      error => setErrorMessage(error.message)
    );
  }, []);

  return [coords, errorMessage];
};

export default useLocation;
