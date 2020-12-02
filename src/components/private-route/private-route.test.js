import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {AuthorizationStatus} from "../../const.js";
import {BrowserRouter} from "react-router-dom";

const noop = () => { };

it(`Should PrivateRoute render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PrivateRoute
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          exact={true}
          path={``}
          render={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
