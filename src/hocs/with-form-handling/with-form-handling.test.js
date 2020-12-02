import React from "react";
import renderer from "react-test-renderer";
import withFromHandling from "./with-form-handling";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {mockFilm} from "../../const.js";


const noop = () => {};

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const mockStore = configureStore([]);
const MockComponentWrapped = withFromHandling(MockComponent);

describe(`Test withFromHandling with internal Component connected to Redux`, () => {
  let store;
  let tree;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    tree = renderer.create(
        <Provider store={store}>
          <MockComponentWrapped
            postCommentAction={noop}
            redirectAction={noop}
            filmId={mockFilm.id}
          />
        </Provider>
    );
  });

  it(`withFromHandling is rendered correctly`, () => {
    expect(tree).toMatchSnapshot();
  });
});
