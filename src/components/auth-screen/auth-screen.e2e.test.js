import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthScreen from "./auth-screen";
import {AuthorizationStatus} from "../../const.js";

configure({adapter: new Adapter()});

const noop = () => { };


it(`Click on "Sign in" button should invoke the callback passed to AddReviewForm by HOC withFormHandling`, () => {
  const handleSubmit = jest.fn();

  const form = shallow(
      <AuthScreen
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        onFormMount={noop}
        onFormSubmit={handleSubmit}
        isAuth={false}
        error={``}
      />
  );

  const formElement = form.find(`form.sign-in__form`);
  formElement.simulate(`submit`);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
