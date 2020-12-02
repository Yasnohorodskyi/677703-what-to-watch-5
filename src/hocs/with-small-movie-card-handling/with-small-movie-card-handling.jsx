import React, {PureComponent} from "react";
import {PLAYING_TIMEOUT} from "../../const.js";


const withSmallMovieCardHandling = (Component) => {
  class WithSmallMovieCardHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        videoRef: null,
        timer: null,
      };


      this.handleVideoMount = this.handleVideoMount.bind(this);
      this.startTimer = this.startTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
      const timer = setTimeout(() => {
        this.state.videoRef.play();
      }, PLAYING_TIMEOUT);
      this.setState({timer});
    }

    resetTimer() {
      if (this.state.timer) {
        this.state.videoRef.load();
      }
      clearTimeout(this.state.timer);
      this.setState({timer: null});
    }

    handleVideoMount(videoRef) {
      this.setState({videoRef});
    }

    render() {
      return (
        <Component
          {...this.props}
          onVideoMount={this.handleVideoMount}
          startTimer={this.startTimer}
          resetTimer={this.resetTimer}
        />
      );
    }
  }

  return WithSmallMovieCardHandling;
};


export default withSmallMovieCardHandling;
