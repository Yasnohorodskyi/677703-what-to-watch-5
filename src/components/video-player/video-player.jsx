import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
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

  render() {
    const {coverImg, src} = this.props;

    return (
      <video
        width="280" height="175"
        ref={this._videoRef}
        poster={`/img/${coverImg}`}
        src={`${src}`}
        muted={`muted`}
      >
        Please use another web browser with video tag support
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  onVideoMount: PropTypes.func.isRequired,
};
