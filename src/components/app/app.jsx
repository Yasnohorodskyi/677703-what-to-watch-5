import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";

import {filmType} from "../../custom-prop-types.js";


const App = (props) => {
  const {movieTitle, genre, releaseDate, films} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen
          movieTitle={movieTitle}
          genre={genre}
          releaseDate={releaseDate}
          films={films}
        />
      </Route>
      <Route exact path="/login">
        <AuthScreen />
      </Route>
      <Route exact path="/mylist">
        <MyListScreen films={films}/>
      </Route>
      <Route exact path="/films/:id">
        <MoviePageScreen />
      </Route>
      <Route exact path="/films/:id/review">
        <AddReviewScreen />
      </Route>
      <Route exact path="/player/:id">
        <PlayerScreen />
      </Route>
    </Switch>

  </BrowserRouter>;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmType).isRequired,
};

export default App;
