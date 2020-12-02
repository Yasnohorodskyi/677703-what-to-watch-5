import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../main-screen/main-screen`, () => () => `MainScreen`);
jest.mock(`../add-review-screen/add-review-screen`, () => () => `AddReviewScreen`);
jest.mock(`../auth-screen/auth-screen`, () => () => `AuthScreen`);
jest.mock(`../movie-page-screen/movie-page-screen`, () => () => `MoviePageScreen`);
jest.mock(`../my-list-screen/my-list-screen`, () => () => `MyListScreen`);
jest.mock(`../player-screen/player-screen`, () => () => `PlayerScreen`);
jest.mock(`../../hocs/with-player-screen-handling/with-player-screen-handling`, () => () => `withPlayerScreenHandling`);
jest.mock(`../../hocs/with-auth-screen-handling/with-auth-screen-handling`, () => () => `withAuthHandling`);
jest.mock(`../private-route/private-route`, () => () => `PrivateRoute`);
jest.mock(`../player-screen/player-screen`, () => () => `PlayerScreen`);


describe(`Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <App />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
