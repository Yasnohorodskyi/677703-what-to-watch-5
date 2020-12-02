import React from "react";
import renderer from "react-test-renderer";
import {PromoMovie} from "./promo-movie";
import {BrowserRouter} from "react-router-dom";
import {mockFilm} from "../../const.js";

const noop = () => {};

it(`Should ProfPromoMovieileSignButton render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PromoMovie
          promoFilm={mockFilm}
          addToFavoritesAction={noop}
          loadFavoriteListAction={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
