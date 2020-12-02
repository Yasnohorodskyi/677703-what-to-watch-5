import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on showMore button should call callback passed by parent component`, () => {
  const handleShowMoreButtonClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton
        onMoreButtonClick={handleShowMoreButtonClick}
      />
  );

  const showMoreButton = wrapper.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(handleShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
