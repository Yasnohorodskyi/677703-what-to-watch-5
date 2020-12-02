import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {loadData} from "./load-data";
import {ActionType} from "../../action";
import {
  fetchFilmsList, fetchFavoriteList,
  addToFavoriteList, fetchFilm, fetchPromo, fetchFilmReviews, addReview, checkAuth, login, logout,
} from "../../api-action";
import {mockFilm, mockSourceFilm,
  APIRoute, AuthorizationStatus,
} from "../../../const";

const api = createAPI(() => {});

const initialState = {
  allFilms: [],
  filmReviews: [],
  allGenres: [],
  genre: `All genres`,
  genreFilms: [],
  film: {},
  promo: {},
};
const mockFilmId = 1;
const mockFilms = [mockFilm, mockFilm, mockFilm];
const mockSourceFilms = [mockSourceFilm, mockSourceFilm, mockSourceFilm];

const mockComment = {
  rating: 8,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
};

const mockAuthData = {
  login: `teterinda@gmail.com`,
  password: `123456`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(loadData(void 0, {})).toEqual(initialState);
});

it(`Reducer should update allFilms by load questions`, () => {
  expect(loadData({
    allFilms: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: mockSourceFilms,
  })).toEqual({
    allFilms: mockFilms
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilm(mockFilmId);

    apiMock
      .onGet(`${APIRoute.FILMS}/${mockFilmId}`)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct get API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchFilmReviews(1);

    apiMock
      .onGet(`/comments/${mockFilmId}`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct post API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewSender = addReview(mockFilmId, mockComment.rating, mockComment.comment, () => {});

    apiMock
      .onPost(`/comments/${mockFilmId}`, {
        rating: mockComment.rating,
        comment: mockComment.comment
      })
      .reply(200, [{fake: true}]);

    return reviewSender(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_COMMENT,
          payload: mockComment,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = fetchPromo();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, [{fake: true}]);

    return promoLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavoriteList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoritesLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/1/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addToFavoriteListAPI = addToFavoriteList(1, 1);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, [{fake: true}]);

    return addToFavoriteListAPI(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_TO_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct checkAuth API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthAction = checkAuth();

    apiMock
      .onGet(`${APIRoute.LOGIN}`)
      .reply(200, [{fake: true}]);

    return checkAuthAction(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct login API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginAction = login(mockAuthData);

    apiMock
      .onPost(`${APIRoute.LOGIN}`, {
        email: mockAuthData.login,
        password: mockAuthData.password,
      })
      .reply(200, [{fake: true}]);

    return loginAction(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct logout API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutAction = logout();

    apiMock
      .onGet(`${APIRoute.LOGOUT}`)
      .reply(200, [{fake: true}]);

    return logoutAction(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });
});
