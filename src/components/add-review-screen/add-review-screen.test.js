import React from "react";
import renderer from "react-test-renderer";
import AddReviewScreen from "./add-review-screen";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../../hocs/with-form-handling/with-form-handling`, () => () => `withFormHandling`);

it(`Should AddReviewScreen render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <AddReviewScreen />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
