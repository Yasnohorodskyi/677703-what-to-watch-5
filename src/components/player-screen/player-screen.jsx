import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types";
import {connect} from "react-redux";

class PlayerScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      allFilms,
      match,
    } = this.props;

    const currentId = match.params.id;
    const currentFilm = allFilms.find((film) => film.id === currentId);

    return (
      <div className="player">
        <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">
              {currentFilm.title}
            </div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div >
      </div >
    );
  }
}

PlayerScreen.propTypes = {
  allFilms: PropTypes.arrayOf(filmType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};


const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
});

export {PlayerScreen};
export default connect(mapStateToProps)(PlayerScreen);
