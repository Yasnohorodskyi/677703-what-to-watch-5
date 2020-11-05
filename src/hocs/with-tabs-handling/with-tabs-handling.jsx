import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {tabType} from "../../custom-prop-types.js";

const withTabsHandling = (Component) => {
  class WithTabsHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTabId: null,
      };

      this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(id) {
      this.setState({activeTabId: id});
    }

    render() {
      return (
        <Component
          {...this.props}
          onTabClick={this.onTabClick}
          activeTabId={this.state.activeTabId}
        />
      );
    }
  }

  withTabsHandling.propTypes = {
    tabs: PropTypes.arrayOf(tabType).isRequired,
  };

  return WithTabsHandling;
};

withTabsHandling.propTypes = {
};


export default withTabsHandling;

