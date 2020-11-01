import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onMoreButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onMoreButtonClick}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onMoreButtonClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
