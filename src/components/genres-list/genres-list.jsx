import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {
    genres,
    activeGenre,
    onGenreChange
  } = props;

  const getActiveClass = (genre) => activeGenre === genre ? `catalog__genres-item--active` : ``;

  const handleGenreClick = (evt) => {
    evt.preventDefault();
    onGenreChange(evt.target.dataset.genre);
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${getActiveClass(genre)}`}>
            <a href="#" className="catalog__genres-link" onClick={handleGenreClick} data-genre={genre}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default GenresList;
