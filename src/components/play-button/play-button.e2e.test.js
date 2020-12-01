import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayButton from "./play-buttton";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Click on "Play" button should call callback passed by parent component`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <PlayButton
        onPlayButtonClick={handlePlayButtonClick}
        isPlaying={false}
      />
  );

  const playButton = wrapper.find(`button.player__play`);
  playButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
