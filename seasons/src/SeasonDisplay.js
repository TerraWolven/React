import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  var season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  console.log(iconName);

  return (
    <div className={`${season} season-display`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  )
};

export default SeasonDisplay;
