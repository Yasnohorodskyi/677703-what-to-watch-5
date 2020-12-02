import React, {PureComponent} from "react";
import {login} from "../../store/api-action.js";
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../store/selectors/selectors";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const SignError = {
  INVALID_EMAIL: `Please enter a valid email address`,
  INVALID_PASSWORD: `Please enter a valid password`,
  USER_NOT_FOUND: `We can’t recognize this email and password combination. Please try again.`,
};

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password !== ``;
};

const withAuthScreen = (Component) => {
  class WithAuthScreen extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        error: ``,
        loginRef: null,
        passwordRef: null,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormMount = this.handleFormMount.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      const {onSubmitAction} = this.props;

      const loginValue = this.state.loginRef.current.value;
      const passwordValue = this.state.passwordRef.current.value;

      if (!validateEmail(loginValue)) {
        this.setState({
          error: SignError.INVALID_EMAIL,
        });
        return;
      }
      if (!validatePassword(passwordValue)) {
        this.setState({
          error: SignError.USER_NOT_FOUND,
        });
        return;
      }

      this.setState({
        error: ``,
      });

      onSubmitAction({
        login: loginValue,
        password: passwordValue,
      });
    }

    handleFormMount(loginRef, passwordRef) {
      this.setState({
        loginRef,
        passwordRef,
      });
    }

    render() {
      const {authorizationStatus} = this.props;
      return (
        <Component
          {...this.props}
          onFormSubmit={this.handleSubmit}
          onFormMount={this.handleFormMount}
          authorizationStatus={this.props.authorizationStatus}
          isAuth={authorizationStatus === AuthorizationStatus.AUTH}
          error={this.state.error}
        />
      );
    }
  }

  WithAuthScreen.propTypes = {
    onSubmitAction: PropTypes.func.isRequired,
    authorizationStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatus(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmitAction(authData) {
      dispatch(login(authData));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthScreen);
};


export default withAuthScreen;
