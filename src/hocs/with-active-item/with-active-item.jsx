import React, {PureComponent} from "react";

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

  return WithActiveItem;
};


export default withActiveItem;
