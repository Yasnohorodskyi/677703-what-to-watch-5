import React from "react";
import renderer from "react-test-renderer";
import withTimeElapsedHandling from "./with-time-elapsed-handling";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withTimeElapsedHandling(MockComponent);

it(`withTimeElapsedHandling is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        videoRef={{}}
        isPlaying={false}
      />
  );

  expect(tree).toMatchSnapshot();
});

