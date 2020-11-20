import React, {PureComponent} from "react";
import {setActiveItemId} from "../../store/action.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: -1,
      };

      this._updateActiveItem = this._updateActiveItem.bind(this);
    }

    _updateActiveItem(id) {
      this.setState({activeItemId: id});
      this.props.setActiveItemIdAction(id);
    }

    render() {
      return (
        <Component
          {...this.props}
          updateActiveItem={this._updateActiveItem}
          activeItemId={this.state.activeItemId}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    setActiveItemIdAction: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    setActiveItemIdAction(id) {
      dispatch(setActiveItemId(id));
    }
  });

  return connect(null, mapDispatchToProps)(WithActiveItem);
};


export default withActiveItem;
