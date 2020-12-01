import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ErrorScreen} from "./error-screen";

const mockError = {
  message: `error message`,
  stack: `error stack`,
};

configure({adapter: new Adapter()});

it(`Click on "RESET ERROR" button should invoke the reset callback`, () => {
  const resetErrorAction = jest.fn();

  const wrapper = mount(
      <ErrorScreen
        error={mockError}
        resetErrorAction={resetErrorAction}
      />
  );

  const resetButton = wrapper.find(`button`);
  resetButton.simulate(`click`);

  expect(resetErrorAction).toHaveBeenCalledTimes(1);
});
