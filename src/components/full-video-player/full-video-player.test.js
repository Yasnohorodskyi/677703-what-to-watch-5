import React, {createRef} from "react";
import renderer from "react-test-renderer";
import FullVideoPlayer from "./full-video-player";

const noop = () => { };


it(`Should FullVideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <FullVideoPlayer
        src={``}
        fullImg={``}
        onVideoMount={noop}
        videoRef={createRef()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

