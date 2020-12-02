import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddToMyListButton from "./add-to-mylist-button";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Click on "My list" button should call callback passed by parent component`, () => {
  const handleAddToMyListButtonClick = jest.fn();

  const wrapper = shallow(
      <AddToMyListButton
        isInList={false}
        onClick={handleAddToMyListButtonClick}
      />
  );

  const addToMyListButton = wrapper.find(`button.btn--list`);
  addToMyListButton.simulate(`click`);

  expect(handleAddToMyListButtonClick).toHaveBeenCalledTimes(1);
});
