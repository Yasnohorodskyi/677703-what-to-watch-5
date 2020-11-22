import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";
import {mockGenres} from "../../const.js";

const noop = () => { };

it(`Should GenresList render correctly`, () => {
  const tree = renderer.create(
      <GenresList
        genres={mockGenres}
        activeGenre={mockGenres[0]}
        onGenreChange={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

