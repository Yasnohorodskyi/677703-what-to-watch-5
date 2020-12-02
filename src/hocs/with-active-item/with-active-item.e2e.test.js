import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const mockStore = configureStore([]);
const store = mockStore({
  withActiveItemId: -1,
});
store.dispatch = jest.fn();

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should activeItemId equal 0`, () => {
  const wrapper = shallow(
      <MockComponentWrapped store={store}/>
  );
  expect(wrapper.dive().state().activeItemId).toEqual(-1);
});
