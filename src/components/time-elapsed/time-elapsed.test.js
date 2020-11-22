import React from "react";
import renderer from "react-test-renderer";
import TimeElapsed from "./time-elapsed";

it(`Should TimeElapsed render correctly`, () => {
  const tree = renderer.create(
      <TimeElapsed
        currentTime={``}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
