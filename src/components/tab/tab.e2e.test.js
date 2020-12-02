import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tab from "./tab";
import {mockTab} from "../../const.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() { },
};

it(`Click on Tab should call callback passed by parent component`, () => {
  const handleTabClick = jest.fn();

  const wrapper = shallow(
      <Tab
        tab={mockTab}
        isActive={false}
        onTabClick={handleTabClick}
      />
  );

  const tab = wrapper.find(`.movie-nav__link`);
  tab.simulate(`click`, mockEvent);

  expect(handleTabClick).toHaveBeenCalledTimes(1);
});


