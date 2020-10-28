import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films.js";
import reviews from "./mocks/reviews.js";


const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App
      movieTitle = {Settings.MOVIE_TITLE}
      genre = {Settings.GENRE}
      releaseDate = {Settings.RELEASE_DATE}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);

