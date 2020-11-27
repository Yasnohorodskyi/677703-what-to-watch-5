import React from "react";
import PropTypes from "prop-types";

const getIcon = (isInList) => {
  return isInList ? (
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg >
  ) : (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>
  );
};

const AddToMyListButton = (props) => {
  const {
    isInList,
    onClick,
  } = props;

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onClick}>
      {getIcon(isInList)}
      <span>My list</span>
    </button>
  );
};

AddToMyListButton.propTypes = {
  isInList: PropTypes.bool.isRequired,
};

export default AddToMyListButton;
