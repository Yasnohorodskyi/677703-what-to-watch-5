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


      this._handleVideoMount = this._handleVideoMount.bind(this);
      this._startTimer = this._startTimer.bind(this);
      this._resetTimer = this._resetTimer.bind(this);
    }

    _startTimer() {
      const timer = setTimeout(() => {
        this.state.videoRef.play();
      }, PLAYING_TIMEOUT);
      this.setState({timer});
    }

    _resetTimer() {
      if (this.state.timer) {
        this.state.videoRef.load();
      }
      clearTimeout(this.state.timer);
      this.setState({timer: null});
    }

    _handleVideoMount(videoRef) {
      this.setState({videoRef});
    }

    render() {
      return (
        <Component
          {...this.props}
          onVideoMount={this._handleVideoMount}
          startTimer={this._startTimer}
          resetTimer={this._resetTimer}
        />
      );
    }
  }

  return WithSmallMovieCardHandling;
};


export default withSmallMovieCardHandling;
