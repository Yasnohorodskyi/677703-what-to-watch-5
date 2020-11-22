import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {mockFilm} from "../../const.js";

jest.mock(`../video-player/video-player.jsx`, () => () => `VideoPlayer`);
jest.mock(`../../hocs/with-video-handling/with-video-handling`, () => () => `withVideoHandling`);

const noop = () => {};

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        onMouseOver={noop}
        onMovieCardClick={noop}
        startTimer={noop}
        resetTimer={noop}
        onVideoMount={noop}
        film={mockFilm}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
