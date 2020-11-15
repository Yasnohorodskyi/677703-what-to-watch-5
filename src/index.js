import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {reducer} from "./store/reducer.js";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
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

