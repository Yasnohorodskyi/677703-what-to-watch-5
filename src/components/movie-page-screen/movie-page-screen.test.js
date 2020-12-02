import React from "react";
import renderer from "react-test-renderer";
import {MoviePageScreen} from "./movie-page-screen";
import {mockFilm, mockReview, mockMatchParamsId, AuthorizationStatus} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

const mockFilms = [mockFilm, mockFilm, mockFilm];
const mockReviews = [mockReview, mockReview, mockReview];
const noop = () => { };


jest.mock(`../films-list/films-list`, () => () => `FilmsList`);
jest.mock(`../tabs/tabs`, () => () => `Tabs`);
jest.mock(`../add-to-mylist-button/add-to-mylist-button`, () => () => `AddToMylistButton`);
jest.mock(`../profile-sign-button/profile-sign-button`, () => () => `ProfileSignButton`);

jest.mock(`../../hocs/with-tabs-handling/with-tabs-handling`, () => () => `withTabsHandling`);
jest.mock(`../films-list/films-list`, () => () => `FilmsList`);
jest.mock(`../../hocs/with-films-list-handling/with-films-list-handling`, () => () => `withFilmsListHandling`);
jest.mock(`../../hocs/with-active-item/with-active-item`, () => () => `withActiveItem`);

it(`Should MoviePageScreen render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <MoviePageScreen
          allFilms={mockFilms}
          filmReviews={mockReviews}
          match={mockMatchParamsId}
          history={{}}
          currentFilm={mockFilm}
          similarFilms={mockFilms}
          loadFilmAction={noop}
          loadFilmReviewsAction={noop}
          authorizationStatus={AuthorizationStatus.AUTH}
          addToFavoritesAction={noop}
          favoriteFilms={mockFilms}
          loadFavoriteListAction={noop}
          lastAddedToFavorites={mockFilm}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
