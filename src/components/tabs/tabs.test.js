import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {mockTab} from "../../const.js";

const tabs = [mockTab, mockTab, mockTab];

jest.mock(`../tab/tab.jsx`, () => () => `Tab`);

it(`Should Tabs render correctly`, () => {
  const tree = renderer.create(
      <Tabs
        tabs={tabs}
        onTabClick={() => {}}
        activeTabId={tabs[0].id}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
