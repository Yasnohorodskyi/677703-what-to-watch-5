import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api.js";
import rootReducer from "./store/reducers/root-reducer.js";
import App from "./components/app/app";
import {checkAuth, fetchFilmsList} from "./store/api-action.js";
import {requireAuthorization} from "./store/action.js";
import {AuthorizationStatus} from "./const.js";


const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          movieTitle={Settings.MOVIE_TITLE}
          genre={Settings.GENRE}
          releaseDate={Settings.RELEASE_DATE}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
