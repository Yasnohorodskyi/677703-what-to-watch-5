import {user} from "./user";
import {ActionType} from "../../action";

import {AuthorizationStatus, mockSourceFilm, mockFilm} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoriteFilms: [],
  lastAddedToFavorites: {},
};

const mockSourceFilms = [mockSourceFilm, mockSourceFilm, mockSourceFilm];
const mockFilms = [mockFilm, mockFilm, mockFilm];

describe(`Should process reducer's updates of "USER" namespace`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update authorizationStatus by setActiveItemid action`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer should update favoriteFilms by loadFavorites action`, () => {
    expect(user({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: mockSourceFilms
    })).toEqual({
      favoriteFilms: mockFilms,
    });
  });

  it(`Reducer should update lastAddedToFavorites by addToFavorites action`, () => {
    expect(user({
      lastAddedToFavorites: {},
    }, {
      type: ActionType.ADD_TO_FAVORITES,
      payload: mockFilm
    })).toEqual({
      lastAddedToFavorites: mockFilm,
    });
  });
});
