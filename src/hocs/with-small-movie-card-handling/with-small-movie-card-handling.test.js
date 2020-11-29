import React from "react";
import renderer from "react-test-renderer";
import withSmallMovieCardHandling from "./with-small-movie-card-handling";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withSmallMovieCardHandling(MockComponent);

it(`withSmallMovieCardHandling is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
      />
  );

  expect(tree).toMatchSnapshot();
});

