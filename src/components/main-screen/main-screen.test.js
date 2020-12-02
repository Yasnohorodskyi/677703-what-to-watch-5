import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {mockFilm, mockGenres, AuthorizationStatus} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

const mockFilms = [mockFilm, mockFilm, mockFilm];
const noop = () => { };

jest.mock(`../promo-movie/promo-movie`, () => () => `PromoMovie`);
jest.mock(`../genres-list/genres-list`, () => () => `GenresList`);
jest.mock(`../films-list/films-list`, () => () => `FilmsList`);
jest.mock(`../../hocs/with-films-list-handling/with-films-list-handling`, () => () => `withFilmsListHandling`);
jest.mock(`../../hocs/with-active-item/with-active-item`, () => () => `withActiveItem`);


it(`Should MainScreen render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <MainScreen
          promo={mockFilm}
          history={{}}
          genreFilms={mockFilms}
          onGenreChange={noop}
          activeGenre={mockGenres[0]}
          shortGenresList={mockGenres}
          allFilms={mockFilms}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
