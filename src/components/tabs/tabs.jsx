import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tab from "../tab/tab.jsx";
import {tabType} from "../../custom-prop-types.js";


class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: this.props.tabs[0].id,
    };
  }

  render() {
    const {tabs} = this.props;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, index) => {
              return (
                <Tab
                  key={`tab-${index}`}
                  tab={tab}
                  onTabClick={(id) => {
                    this.setState({activeTabId: id});
                  }}
                  isActive={this.state.activeTabId === tab.id}
                />
              );
            })}
          </ul>
        </nav>

        {tabs.find(({id}) => id === this.state.activeTabId).render()}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabType).isRequired,
};

export default Tabs;

