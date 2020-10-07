import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

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
    />,
    document.querySelector(`#root`)
);

