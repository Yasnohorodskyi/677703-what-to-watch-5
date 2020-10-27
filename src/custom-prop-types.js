import PropTypes from "prop-types";

export const filmType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  rating: PropTypes.shape({
    value: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImg: PropTypes.string.isRequired,
  fullImg: PropTypes.string.isRequired,
  similarFilmsID: PropTypes.arrayOf(PropTypes.number).isRequired,
  duration: PropTypes.string.isRequired,
}).isRequired;

export const reviewType = PropTypes.shape({
  filmId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
});
