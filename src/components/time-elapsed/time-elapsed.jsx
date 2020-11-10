import React from "react";
import PropTypes from "prop-types";

const TimeElapsed = (props) => {
  return (
    <div className="player__time-value">{props.currentTime || `00:00:00`}</div>
  );
};

TimeElapsed.propTypes = {
  currentTime: PropTypes.string.isRequired,
};

export default TimeElapsed;
