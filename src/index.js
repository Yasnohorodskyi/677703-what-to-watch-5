import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api.js";
import rootReducer from "./store/reducers/root-reducer.js";
import App from "./components/app/app";
import {checkAuth, fetchFavoriteList, fetchFilmsList, fetchPromo} from "./store/api-action.js";
import {requireAuthorization} from "./store/action.js";
import {AuthorizationStatus} from "./const.js";
import {redirect} from "./store/middlewares/redirect.js";


const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(fetchFavoriteList()),
  store.dispatch(fetchPromo()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
