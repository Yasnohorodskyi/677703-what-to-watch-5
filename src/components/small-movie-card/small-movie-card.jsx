import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types.js";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onMouseOver} = this.props;
    const {
      title,
      coverImg,
      id
    } = film;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMouseOver(id);
        }}
      >
        <div className="small-movie-card__image">
          <img src={`/img/${coverImg}`} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article >
    );
  }
}

SmallMovieCard.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  film: filmType
};

export default SmallMovieCard;
