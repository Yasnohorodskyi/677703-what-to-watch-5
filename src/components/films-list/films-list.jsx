import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMoreButton from "../show-more-button/show-more-button";

import {filmType} from "../../custom-prop-types.js";
import {DEFAULT_RENDERED_FILMS_COUNT} from "../../const.js";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilmID: -1,
      renderedFilmsCount: DEFAULT_RENDERED_FILMS_COUNT,
    };

    this._handleMoreButtonClick = this._handleMoreButtonClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.films !== this.props.films) {
      this.setState({
        renderedFilmsCount: DEFAULT_RENDERED_FILMS_COUNT,
      });
    }
  }

  _handleMoreButtonClick() {
    this.setState((prevState, props) => {
      const length = props.films.length;
      const oldCount = prevState.renderedFilmsCount;
      const newCount = ((oldCount + 8) > (length - 1)) ? length : (oldCount + 8);

      return ({
        renderedFilmsCount: newCount,
      });
    });
  }

  _getMoreButtonVisibility() {
    if (this.state.renderedFilmsCount < this.props.films.length) {
      return true;
    }

    return false;
  }

  render() {
    const {films, history} = this.props;
    const filmsToBeRendered = films.slice(0, this.state.renderedFilmsCount);

    return (
      <>
        <div className="catalog__movies-list">
          {filmsToBeRendered.map((film, i) => {
            return (
              <SmallMovieCard
                key={`${i}-film`}
                film={film}
                onMouseOver={(hoverID) => {
                  this.setState({currentFilmID: hoverID});
                }}
                onMovieCardClick={() => history.push(`/films/${this.state.currentFilmID}`)}
              />
            );
          })}
        </div>

        {this._getMoreButtonVisibility()
          &&
          <ShowMoreButton
            onMoreButtonClick={this._handleMoreButtonClick}
          />
        }

      </>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  history: PropTypes.object.isRequired,
};

export default FilmsList;
