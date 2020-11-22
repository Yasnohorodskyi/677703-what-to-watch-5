import React from "react";
import renderer from "react-test-renderer";
import {MyListScreen} from "./my-list-screen";
import {mockFilm} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

const mockFilms = [mockFilm, mockFilm, mockFilm];
const noop = () => { };

jest.mock(`../films-list/films-list`, () => () => `FilmsList`);
jest.mock(`../../hocs/with-films-list-handling/with-films-list-handling`, () => () => `withFilmsListHandling`);
jest.mock(`../../hocs/with-active-item/with-active-item`, () => () => `withActiveItem`);


it(`Should MyListScreen render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <MyListScreen
          favoriteFilms={mockFilms}
          history={{}}
          loadFavoriteListAction={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
