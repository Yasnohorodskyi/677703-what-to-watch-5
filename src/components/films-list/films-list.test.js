import React from "react";
import renderer from "react-test-renderer";
import {FilmsList} from "./films-list";
import {mockFilm, DEFAULT_RENDERED_FILMS_COUNT} from "../../const.js";

const mockFilms = [mockFilm, mockFilm, mockFilm];
const noop = () => { };

jest.mock(`../../hocs/with-small-movie-card-handling/with-small-movie-card-handling`, () => () => `withSmallMovieCardHandling`);
jest.mock(`../small-movie-card/small-movie-card`, () => () => `SmallMovieCard`);
jest.mock(`../show-more-button/show-more-button`, () => () => `ShowMoreButton`);


it(`Should FilmsList render correctly`, () => {
  const tree = renderer.create(
      <FilmsList
        films={mockFilms}
        history={{}}
        isMoreButtonVisible={true}
        onMoreButtonClick={noop}
        activeItemId={-1}
        updateActiveItem={noop}
        renderedFilmsCount={DEFAULT_RENDERED_FILMS_COUNT}
        resetFilmAction={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

