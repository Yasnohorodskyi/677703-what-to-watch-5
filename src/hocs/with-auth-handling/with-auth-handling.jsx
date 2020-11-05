import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";


const withAuthHandling = (Component) => {
  class WithAuthHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.prevenDefault();

      return <Redirect to="/" />;
    }

    render() {
      return (
        <Component
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }

  return WithAuthHandling;
};


export default withAuthHandling;
