import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReviewForm from "./add-review-form";

configure({adapter: new Adapter()});

const noop = () => {};

describe(`Should process input and submit events render correctly`, () => {
  it(`Click on "Post" button invoke the callback passed to AddReviewForm by HOC withFormHandling`, () => {
    const handleSubmit = jest.fn();

    const form = mount(
        <AddReviewForm
          handleSubmit={handleSubmit}
          handleRatingChange={noop}
          handleTextChange={noop}
          rating={0}
          isSubmitActive={true}
          isFormDisabled={true}
        />
    );

    const formElement = form.find(`.add-review__form`);
    formElement.simulate(`submit`);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Input events should invoke the callbacks passed to AddReviewForm from HOC withFormHandling`, () => {
    const handleRatingChange = jest.fn();
    const handleTextChange = jest.fn();

    const form = shallow(
        <AddReviewForm
          handleSubmit={noop}
          handleRatingChange={handleRatingChange}
          handleTextChange={handleTextChange}
          rating={3}
          isSubmitActive={true}
          isFormDisabled={true}
        />
    );

    const textarea = form.find(`textarea`);
    const ratingStars = form.find(`.rating__stars`);

    textarea.simulate(`change`, {target: {value: `Hello`}});
    ratingStars.simulate(`change`);

    expect(handleRatingChange).toHaveBeenCalledTimes(1);
    expect(handleTextChange).toHaveBeenCalledTimes(1);
  });
});

it(`Click on "Post" button invoke the callback passed to AddReviewForm from HOC withFormHandling`, () => {
  const handleSubmit = jest.fn();
  const handleRatingChange = jest.fn();
  const handleTextChange = jest.fn();
  const form = mount(
      <AddReviewForm
        handleSubmit={handleSubmit}
        handleRatingChange={handleRatingChange}
        handleTextChange={handleTextChange}
        rating={0}
        isSubmitActive={true}
        isFormDisabled={true}
      />
  );

  const formElement = form.find(`.add-review__form`);
  formElement.simulate(`submit`);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
