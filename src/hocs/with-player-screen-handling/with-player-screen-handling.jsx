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

      this._handleVideoMount = this._handleVideoMount.bind(this);
      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleFullscreenButtonClick = this._handleFullscreenButtonClick.bind(this);
      this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
    }

    _handleVideoMount(videoRef) {
      this.setState({videoRef});
    }

    _handlePlayButtonClick() {
      const video = this.state.videoRef;
      if (!this.state.isPlaying) {
        this.setState({isPlaying: true});
        video.play();
      } else {
        this.setState({isPlaying: false});
        video.pause();
      }
    }

    _handleFullscreenButtonClick() {
      const video = this.state.videoRef;
      video.requestFullscreen();
    }

    _handleExitButtonClick() {
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
          onPlayButtonClick={this._handlePlayButtonClick}
          onVideoMount={this._handleVideoMount}
          isPlaying={this.state.isPlaying}
          videoRef={this.state.videoRef}
          onFullscreenButtonClick={this._handleFullscreenButtonClick}
          onExitButtonClick={this._handleExitButtonClick}
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
