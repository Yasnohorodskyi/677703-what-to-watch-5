import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideoHandling = (Component) => {
  class WithVideoHandling extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {src, onVideoMount} = this.props;
      const video = this._videoRef.current;

      video.src = src;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
      onVideoMount(this._videoRef.current);
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.oncanplaythrough = null;
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          videoRef={this._videoRef}
        />
      );
    }
  }

  WithVideoHandling.propTypes = {
    src: PropTypes.string.isRequired,
    onVideoMount: PropTypes.func.isRequired,
    coverImg: PropTypes.string.isRequired,
  };

  return WithVideoHandling;
};

export default withVideoHandling;
