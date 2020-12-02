import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlayerScreen} from "./player-screen";
import {mockFilm, mockMatchParamsId} from "../../const.js";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockFilms = [mockFilm, mockFilm, mockFilm];
const noop = () => {};

describe(`Should process click on exit and fullScreen button correctly`, () => {
  it(`Click on fullScreen button should call callback passed by parent component`, () => {
    const handleFullScreenButtonClick = jest.fn();

    const wrapper = shallow(
        <PlayerScreen
          allFilms={mockFilms}
          match={mockMatchParamsId}
          onVideoMount={noop}
          onPlayButtonClick={noop}
          onFullscreenButtonClick={handleFullScreenButtonClick}
          onExitButtonClick={noop}
          isPlaying={false}
          videoRef={{}}
        />
    );

    const fullScreenButton = wrapper.find(`button.player__full-screen`);
    fullScreenButton.simulate(`click`);

    expect(handleFullScreenButtonClick).toHaveBeenCalledTimes(1);
  });


  it(`Click on exit button should call callback passed by parent component`, () => {
    const handleExitButtonClick = jest.fn();

    const wrapper = shallow(
        <PlayerScreen
          allFilms={mockFilms}
          match={mockMatchParamsId}
          onVideoMount={noop}
          onPlayButtonClick={noop}
          onFullscreenButtonClick={noop}
          onExitButtonClick={handleExitButtonClick}
          isPlaying={false}
          videoRef={{}}
        />
    );

    const exitButton = wrapper.find(`button.player__exit`);
    exitButton.simulate(`click`);

    expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
  });
});

