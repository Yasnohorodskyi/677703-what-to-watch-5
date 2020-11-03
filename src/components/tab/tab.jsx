import React from "react";
import PropTypes from "prop-types";
import {tabType} from "../../custom-prop-types.js";

const Tab = (props) => {
  const {
    tab,
    isActive,
    onTabClick,
  } = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    onTabClick(tab.id);
  };

  return (
    <li className={`movie-nav__item ${isActive && `movie-nav__item--active`}`}>
      <a
        href={`#`}
        className="movie-nav__link"
        onClick={handleClick}
      >
        {tab.title}
      </a>
    </li>
  );
};

Tab.propTypes = {
  tab: tabType,
  isActive: PropTypes.bool.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tab;


