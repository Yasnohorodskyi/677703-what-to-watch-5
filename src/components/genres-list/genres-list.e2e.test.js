import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list";
import {mockGenres} from "../../const.js";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() { },
  target: {
    dataset: `All genres`,
  }
};

it(`Click on genre item should invoke handleGenreClick callback`, () => {
  const handleGenreClick = jest.fn();

  const wrapper = shallow(
      <GenresList
        genres={mockGenres}
        activeGenre={mockGenres[0]}
        onGenreChange={handleGenreClick}
      />
  );

  const genres = wrapper.find(`.catalog__genres-link`);
  genres.at(0).simulate(`click`, mockEvent);

  expect(handleGenreClick).toHaveBeenCalledTimes(1);
});
