import React from "react";
import renderer from "react-test-renderer";
import {ErrorScreen} from "./error-screen";

const noop = () => { };

it(`Should ErrorScreen render correctly`, () => {
  const tree = renderer.create(
      <ErrorScreen
        error={{}}
        resetErrorAction={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

