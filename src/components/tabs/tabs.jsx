import React from "react";
import PropTypes from "prop-types";
import Tab from "../tab/tab.jsx";
import {tabType} from "../../custom-prop-types.js";


const Tabs = (props) => {
  const {
    tabs,
    onTabClick
  } = props;
  let {activeTabId} = props;

  if (!activeTabId) {
    activeTabId = tabs[0].id;
  }

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={`tab-${index}`}
                tab={tab}
                onTabClick={onTabClick}
                isActive={activeTabId === tab.id}
              />
            );
          })}
        </ul>
      </nav>

      {tabs.find(({id}) => id === activeTabId).render()}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabType).isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeTabId: PropTypes.string,
};

export default Tabs;

