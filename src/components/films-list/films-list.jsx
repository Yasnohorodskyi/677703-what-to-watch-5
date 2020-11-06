import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMoreButton from "../show-more-button/show-more-button";

import {filmType} from "../../custom-prop-types.js";


const FilmsList = (props) => {
  const {
    films,
    history,
    isMoreButtonVisible,
    onMoreButtonClick,
    currentFilmID,
    onMouseOver,
    renderedFilmsCount,
  } = props;

  const filmsToBeRendered = films.slice(0, renderedFilmsCount);

  return (
    <>
      <div className="catalog__movies-list">
        {filmsToBeRendered.map((film, i) => {
          return (
            <SmallMovieCard
              key={`${i}-film`}
              film={film}
              onMouseOver={onMouseOver}
              onMovieCardClick={() => history.push(`/films/${currentFilmID}`)}
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
  films: PropTypes.arrayOf(filmType).isRequired,
  history: PropTypes.object.isRequired,
  isMoreButtonVisible: PropTypes.bool.isRequired,
  onMoreButtonClick: PropTypes.func.isRequired,
  currentFilmID: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  renderedFilmsCount: PropTypes.number.isRequired,
};

export default FilmsList;
