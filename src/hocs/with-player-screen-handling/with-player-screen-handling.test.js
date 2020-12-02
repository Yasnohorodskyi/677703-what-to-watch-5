import React from "react";
import renderer from "react-test-renderer";
import withPlayerScreenHandling from "./with-player-screen-handling";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withPlayerScreenHandling(MockComponent);

it(`withPlayerScreenHandling is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        history={{}}
      />
  );
  expect(tree).toMatchSnapshot();
});

