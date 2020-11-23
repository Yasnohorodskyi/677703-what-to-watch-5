import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {getRequestError} from "../../store/selectors/selectors.js";

const erorrStyle = {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  position: `fixed`,
  top: `0`,
  left: `0`,
  right: `0`,
  height: `auto`,
  zIndex: `10`,
  backgroundColor: `red`,
};
const ErrorScreen = (props) => {
  const {error} = props;

  console.log(`error was updated`);
  console.log(error);
  if (!error) {
    return null;
  }
  return <React.Fragment>
    <section style={erorrStyle}>
      <h1>Error</h1>
      <h2>Well poo. Sadly, the website had a bad day.</h2>

      <p>{error.message}</p>
      <p>{error.stack}</p>

      <Link to={AppRoute.ROOT}>
        Go to main page
      </Link>
    </section>
  </React.Fragment>;
};

ErrorScreen.propTypes = {
  error: PropTypes.object,
};

const mapStateToProps = (state) => ({
  error: getRequestError(state),
});

export {ErrorScreen};
export default connect(mapStateToProps)(ErrorScreen);
