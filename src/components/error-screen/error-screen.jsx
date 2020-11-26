import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {getError} from "../../store/selectors/selectors.js";
import {resetError} from "../../store/action.js";

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
  paddingBottom: `30px`,
};

const styleP = {
  textAlign: `center`,
};


const ErrorScreen = (props) => {
  const {
    error,
    resetErrorAction,
  } = props;

  if (!error) {
    return null;
  }
  return <React.Fragment>
    <section style={erorrStyle}>
      <h1>Error</h1>
      <h2>Well poo. Sadly, the website had a bad day.</h2>

      <p style={styleP}>{error.message}</p>
      <p style={styleP}>{error.stack}</p>

      <button onClick={resetErrorAction}>
        RESET ERROR
      </button>
    </section>
  </React.Fragment>;
};

ErrorScreen.propTypes = {
  error: PropTypes.object,
  resetErrorAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  resetErrorAction() {
    dispatch(resetError());
  }
});

export {ErrorScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ErrorScreen);
