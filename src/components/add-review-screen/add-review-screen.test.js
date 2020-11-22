import React from "react";
import renderer from "react-test-renderer";
import {AddReviewScreen} from "./add-review-screen";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus, mockFilm, mockMatchParamsId} from "../../const.js";

jest.mock(`../add-review-form/add-review-form`, () => () => `AddReviewForm`);
jest.mock(`../../hocs/with-form-handling/with-form-handling`, () => () => `withFormHandling`);
jest.mock(`../error-screen/error-screen`, () => () => `ErrorScreen`);
jest.mock(`../profile-sign-button/profile-sign-button`, () => () => `ProfilSignButton`);

const noop = () => {};

it(`Should AddReviewScreen render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <AddReviewScreen
          currentFilm={mockFilm}
          loadFilmAction={noop}
          match={mockMatchParamsId}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
