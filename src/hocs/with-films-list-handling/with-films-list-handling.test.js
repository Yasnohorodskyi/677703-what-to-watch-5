import React from "react";
import renderer from "react-test-renderer";
import withFilmsListHandling from "./with-films-list-handling";
import {mockFilm} from "../../const.js";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withFilmsListHandling(MockComponent);

it(`withFilmsListHandling is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        films={[mockFilm, mockFilm, mockFilm]}
      />
  );
  expect(tree).toMatchSnapshot();
});

