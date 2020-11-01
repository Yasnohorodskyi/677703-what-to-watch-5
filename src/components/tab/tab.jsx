import React from "react";
import PropTypes from "prop-types";

const Tab = (props) => {
  const {
    label,
    className,
    onTabClick,
  } = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    onTabClick(label);
  };

  return (
    <li className={className}>
      <a
        href={`#`}
        className={`movie-nav__link`}
        onClick={handleClick}
      >
        {label}
      </a>
    </li>
  );
};

export default Tab;

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};
