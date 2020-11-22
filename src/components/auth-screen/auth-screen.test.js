import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";

const noop = () => { };

it(`Should AuthScreen render correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        error={`error text`}
        authorizationStatus={`Auth`}
        onFormMount={noop}
        onFormSubmit={noop}
        isAuth={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

