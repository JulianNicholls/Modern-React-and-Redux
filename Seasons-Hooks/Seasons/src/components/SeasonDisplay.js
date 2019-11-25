import React from 'react';

import '../SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach.",
    icon: 'sun',
  },
  winter: {
    text: "Brr! it's chilly here.",
    icon: 'snowflake',
  },
};
// Latitude and 1-BASED month
// April => September is considered northern summer and vice versa.
const getSeason = (lat, month) => {
  if (lat >= 0.0) {
    return month >= 4 && month <= 9 ? 'summer' : 'winter';
  }

  return month >= 4 && month <= 9 ? 'winter' : 'summer';
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth() + 1);
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
