import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";

import withPlayerScreenHandling from "../../hocs/with-player-screen-handling/with-player-screen-handling";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";


const PlayerScreenWrapped = withPlayerScreenHandling(PlayerScreen);

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreen
              history={history}
            />
          )}
        />
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={({history}) => (
            <MyListScreen
              history={history}
            />
          )}
        />
        <Route exact path={AppRoute.FILMS_ID}
          render={({match, history}) => (
            <MoviePageScreen
              key={new Date()}
              match={match}
              history={history}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.REVIEW_ID}
          render={({match}) => <AddReviewScreen match={match}/>}
        />
        <Route exact path={AppRoute.PLAYER_ID}
          render={({match, history}) => (
            <PlayerScreenWrapped
              match={match}
              history={history}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
