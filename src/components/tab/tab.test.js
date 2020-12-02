import React from "react";
import renderer from "react-test-renderer";
import Tab from "./tab";
import {mockTab} from "../../const.js";

jest.mock(`../video-player/video-player.jsx`, () => () => `VideoPlayer`);
jest.mock(`../../hocs/with-video-handling/with-video-handling`, () => () => `withVideoHandling`);


it(`Should Tab render correctly`, () => {
  const tree = renderer.create(
      <Tab
        tab={mockTab}
        isActive={true}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
