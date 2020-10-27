import React from "react";
import PropTypes from "prop-types";

const Tab = (props) => {
  const {
    label,
    className,
    onTabClick,
  } = props;
  return (
    <li className={className}>
      <a
        href={`#`}
        className={`movie-nav__link`}
        onClick={(evt) => {
          evt.preventDefault();
          onTabClick(label);
        }}
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
