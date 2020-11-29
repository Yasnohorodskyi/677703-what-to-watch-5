import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const mockStore = configureStore([]);
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`Test withActiveItem with internal Component connected to Redux`, () => {
  let store;
  let tree;

  beforeEach(() => {
    store = mockStore({
      withActiveItemId: -1,
    });
    store.dispatch = jest.fn();

    tree = renderer.create(
        <Provider store={store}>
          <MockComponentWrapped />
        </Provider>
    );
  });

  it(`withActiveItem is rendered correctly`, () => {
    expect(tree).toMatchSnapshot();
  });
});
