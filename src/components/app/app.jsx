import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {movieTitle, genre, releaseDate} = props;

  return (
    <MainScreen
      movieTitle={movieTitle}
      genre={genre}
      releaseDate={releaseDate}
    />
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
