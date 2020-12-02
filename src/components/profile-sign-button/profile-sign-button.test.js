import React from "react";
import renderer from "react-test-renderer";
import ProfileSignButton from "./profile-sign-button";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const.js";

it(`Should ProfileSignButton render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <ProfileSignButton
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
