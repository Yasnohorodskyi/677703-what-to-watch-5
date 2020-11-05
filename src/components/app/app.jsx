import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";

import withAuthHandling from "../../hocs/with-auth-handling/with-auth-handling";


const AuthScreenWrapped = withAuthHandling(AuthScreen);

const App = (props) => {
  const {
    movieTitle,
    genre,
    releaseDate,
  } = props;


  return <BrowserRouter>
    <Switch>
      <Route exact path="/"
        render={({history}) => (
          <MainScreen
            movieTitle={movieTitle}
            genre={genre}
            releaseDate={releaseDate}
            history={history}
          />
        )}
      />
      <Route exact path="/login">
        <AuthScreenWrapped />
      </Route>
      <Route exact path="/mylist"
        render={({history}) => (
          <MyListScreen
            history={history}
          />
        )}
      />
      <Route exact path="/films/:id"
        render={({match, history}) => (
          <MoviePageScreen
            match={match}
            history={history}
          />
        )}
      />
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
};

export default App;
