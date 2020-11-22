import React from "react";
import renderer from "react-test-renderer";
import PlayButton from "./play-buttton";

const noop = () => { };

it(`Should PlayButton render correctly`, () => {
  const tree = renderer.create(
      <PlayButton
        onPlayButtonClick={noop}
        isPlaying={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
