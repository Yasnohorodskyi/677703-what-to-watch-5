import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {filmType} from "../../custom-prop-types.js";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilmID: -1,
    };
  }

  render() {
    const {films, history} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => {
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
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  history: PropTypes.object.isRequired,
};

export default FilmsList;
