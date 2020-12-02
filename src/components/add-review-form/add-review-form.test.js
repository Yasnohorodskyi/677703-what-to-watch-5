import React from "react";
import renderer from "react-test-renderer";
import AddReviewForm from "./add-review-form";

const noop = () => {};

it(`Should AddReviewForm render correctly`, () => {
  const tree = renderer.create(
      <AddReviewForm
        handleSubmit={noop}
        handleRatingChange={noop}
        handleTextChange={noop}
        rating={3}
        isSubmitActive={true}
        isFormDisabled={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
