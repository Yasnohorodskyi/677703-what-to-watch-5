import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withPlayerScreenHandling = (Component) => {
  class WithPlayerScreenHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        videoRef: null,
        isPlaying: false,
      };

      this.handleVideoMount = this.handleVideoMount.bind(this);
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullscreenButtonClick = this.handleFullscreenButtonClick.bind(this);
      this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
    }

    handleVideoMount(videoRef) {
      this.setState({videoRef});
    }

    handlePlayButtonClick() {
      const video = this.state.videoRef;
      if (!this.state.isPlaying) {
        this.setState({isPlaying: true});
        video.play();
      } else {
        this.setState({isPlaying: false});
        video.pause();
      }
    }

    handleFullscreenButtonClick() {
      const video = this.state.videoRef;
      video.requestFullscreen();
    }

    handleExitButtonClick() {
      const video = this.state.videoRef;
      if (this.state.isPlaying) {
        video.pause();
      }
      this.props.history.goBack();
    }

    render() {
      return (
        <Component
          {...this.props}
          onPlayButtonClick={this.handlePlayButtonClick}
          onVideoMount={this.handleVideoMount}
          isPlaying={this.state.isPlaying}
          videoRef={this.state.videoRef}
          onFullscreenButtonClick={this.handleFullscreenButtonClick}
          onExitButtonClick={this.handleExitButtonClick}
        />
      );
    }
  }

  WithPlayerScreenHandling.propTypes = {
    history: PropTypes.object.isRequired,
  };

  return WithPlayerScreenHandling;
};

export default withPlayerScreenHandling;
