import React from "react";
import renderer from "react-test-renderer";
import withAuthScreenHandling from "./with-auth-screen-handling";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

jest.mock(`../../store/selectors/selectors`, () => ({
  getAuthorizationStatus: () => `AUTH`,
}));

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const mockStore = configureStore([]);
const MockComponentWrapped = withAuthScreenHandling(MockComponent);

describe(`Test withAuthScreenHandling with internal Component connected to Redux`, () => {
  let store;
  let tree;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    tree = renderer.create(
        <Provider store={store}>
          <MockComponentWrapped />
        </Provider>
    );
  });

  it(`withAuthScreenHandling is rendered correctly`, () => {
    expect(tree).toMatchSnapshot();
  });
});
