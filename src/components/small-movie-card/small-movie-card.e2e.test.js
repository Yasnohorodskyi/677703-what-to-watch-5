import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {mockFilm} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

describe(`Should mouseOver and click events on SmallMovieCard process corretly`, () => {
  it(`MouseOver event on SmallMovieCard should call callback passed by parent component`, () => {
    const handleMouseOver = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          onMouseOver={handleMouseOver}
          onMovieCardClick={noop}
          startTimer={noop}
          resetTimer={noop}
          onVideoMount={noop}
          film={mockFilm}
        />
    );

    const smallMovieCard = wrapper.find(`.small-movie-card`);
    smallMovieCard.simulate(`mouseover`);

    expect(handleMouseOver).toHaveBeenCalledTimes(1);
  });

  it(`Click event on SmallMovieCard should call callback passed by parent component`, () => {
    const handleMovieCardClick = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          onMouseOver={noop}
          onMovieCardClick={handleMovieCardClick}
          startTimer={noop}
          resetTimer={noop}
          onVideoMount={noop}
          film={mockFilm}
        />
    );

    const smallMovieCard = wrapper.find(`.small-movie-card`);
    smallMovieCard.simulate(`click`);

    expect(handleMovieCardClick).toHaveBeenCalledTimes(1);
  });
});

