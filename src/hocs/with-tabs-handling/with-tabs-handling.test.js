import React from "react";
import renderer from "react-test-renderer";
import withTabsHandling from "./with-tabs-handling";
import {mockTab} from "../../const.js";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withTabsHandling(MockComponent);

it(`withTabsHandling is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        tabs={[mockTab, mockTab, mockTab]}
      />
  );

  expect(tree).toMatchSnapshot();
});

