import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";

import {filmType, reviewType} from "../../custom-prop-types.js";


const App = (props) => {
  const {
    movieTitle,
    genre,
    releaseDate,
    films,
    reviews,
  } = props;


  return <BrowserRouter>
    <Switch>
      <Route exact path="/"
        render={({history}) => (
          <MainScreen
            movieTitle={movieTitle}
            genre={genre}
            releaseDate={releaseDate}
            films={films}
            history={history}
          />
        )}
      />
      <Route exact path="/login">
        <AuthScreen />
      </Route>
      <Route exact path="/mylist"
        render={({history}) => (
          <MyListScreen
            films={films}
            onMovieCardClick={(filmID) => history.push(`/films/${filmID}`)}
            history={history}
          />
        )}
      />
      <Route exact path="/films/:id"
        render={({match, history}) => (
          <MoviePageScreen
            films={films}
            reviews={reviews}
            match={match}
            history={history}
          />
        )}
      />
      <Route exact path="/films/:id/review">
        <AddReviewScreen />
      </Route>
      <Route exact path="/player/:id">
        <PlayerScreen film={films[3]}/>
      </Route>
    </Switch>

  </BrowserRouter>;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmType).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};

export default App;
