import React, {createRef} from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {mockFilm} from "../../const.js";

const videoRef = createRef();
it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        src={mockFilm.video}
        coverImg={mockFilm.coverImg}
        onVideoMount={() => {}}
        videoRef={videoRef}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
