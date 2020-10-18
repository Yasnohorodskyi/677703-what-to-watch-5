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
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImg: PropTypes.string.isRequired,
  fullImg: PropTypes.string.isRequired,
  similarFilmsID: PropTypes.arrayOf(PropTypes.number).isRequired
}).isRequired;

export const reviewType = PropTypes.shape({
  filmID: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
});
