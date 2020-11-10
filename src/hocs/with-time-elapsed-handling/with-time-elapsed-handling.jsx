import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const getElapsedTime = (videoRef) => {
  const currentTime = videoRef.currentTime;
  const duration = videoRef.duration;
  return new Date(1000 * (duration - currentTime)).toISOString().substr(11, 8);
};

const withTimeElapsedHandling = (Component) => {
  class WithTimeElapsedHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTime: ``,
        videoRef: this.props.videoRef,

      };
      this.interval = null;
    }

    componentDidUpdate() {
      const {videoRef} = this.props;

      if (videoRef) {
        this.interval = setInterval(() => {
          this.setState({
            currentTime: getElapsedTime(videoRef),
          });
        }, 1000);
      }
    }

    componentWillUnmount() {
      clearInterval(this.interval);
      this.interval = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          currentTime={this.state.currentTime}
        />
      );
    }
  }

  WithTimeElapsedHandling.propTypes = {
    videoRef: PropTypes.object,
  };

  return WithTimeElapsedHandling;
};

export default withTimeElapsedHandling;
