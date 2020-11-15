import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api.js";
import App from "./components/app/app";
import {reducer} from "./store/reducer.js";

const api = createAPI();

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App
        movieTitle={Settings.MOVIE_TITLE}
        genre={Settings.GENRE}
        releaseDate={Settings.RELEASE_DATE}
        // films={films}
        // reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

