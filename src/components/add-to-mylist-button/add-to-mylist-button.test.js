import React from "react";
import renderer from "react-test-renderer";
import AddToMylistButton from "./add-to-mylist-button";

const noop = () => { };
it(`Should AddToMylistButton render correctly`, () => {
  const tree = renderer.create(
      <AddToMylistButton
        isInList={false}
        onClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

