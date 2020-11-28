import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMoreButton from "../show-more-button/show-more-button";

import {filmType} from "../../custom-prop-types.js";

import withSmallMovieCardHandling from "../../hocs/with-small-movie-card-handling/with-small-movie-card-handling";
import {resetFilm} from "../../store/action";

const SmallMovieCardWrapped = withSmallMovieCardHandling(SmallMovieCard);


const FilmsList = (props) => {
  const {
    films,
    history,
    isMoreButtonVisible,
    onMoreButtonClick,
    activeItemId,
    updateActiveItem,
    renderedFilmsCount,
    resetFilmAction,
  } = props;

  const filmsToBeRendered = films.slice(0, renderedFilmsCount);

  const handleMovieCardClick = () => {
    resetFilmAction();
    history.push(`/films/${activeItemId}`);
  };

  return (
    <>
      <div className="catalog__movies-list">
        {filmsToBeRendered.map((film, i) => {
          return (
            <SmallMovieCardWrapped
              key={`${i}-film`}
              film={film}
              onMouseOver={updateActiveItem}
              onMovieCardClick={handleMovieCardClick}
            />
          );
        })}
      </div>

      {isMoreButtonVisible &&
        <ShowMoreButton
          onMoreButtonClick={onMoreButtonClick}
        />
      }

    </>
  );

};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
  history: PropTypes.object.isRequired,
  isMoreButtonVisible: PropTypes.bool.isRequired,
  onMoreButtonClick: PropTypes.func.isRequired,
  activeItemId: PropTypes.number.isRequired,
  updateActiveItem: PropTypes.func.isRequired,
  renderedFilmsCount: PropTypes.number.isRequired,
  resetFilmAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetFilmAction() {
    dispatch(resetFilm());
  }
});

export {FilmsList};
export default connect(null, mapDispatchToProps)(FilmsList);
