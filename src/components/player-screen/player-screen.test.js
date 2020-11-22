import React from "react";
import renderer from "react-test-renderer";
import {PlayerScreen} from "./player-screen";
import {mockFilm, mockMatchParamsId} from "../../const.js";

const mockFilms = [mockFilm, mockFilm, mockFilm];
const noop = () => { };

jest.mock(`../full-video-player/full-video-player.jsx`, () => () => `FullVideoPlayer`);
jest.mock(`../play-button/play-buttton`, () => () => `PlayButton`);
jest.mock(`../time-elapsed/time-elapsed`, () => () => `TimeElapsed`);
jest.mock(`../../hocs/with-video-handling/with-video-handling`, () => () => `withVideoHandling`);
jest.mock(`../../hocs/with-time-elapsed-handling/with-time-elapsed-handling`, () => () => `withTimeElapsedHandling`);


it(`Should PlayerScreen render correctly`, () => {
  const tree = renderer.create(
      <PlayerScreen
        allFilms={mockFilms}
        match={mockMatchParamsId}
        onVideoMount={noop}
        onPlayButtonClick={noop}
        onFullscreenButtonClick={noop}
        onExitButtonClick={noop}
        isPlaying={false}
        videoRef={{}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
