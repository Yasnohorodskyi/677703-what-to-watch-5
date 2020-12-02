import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../const.js";

const ProfilSignButton = (props) => {
  const {authorizationStatus} = props;
  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH ?
          <Link to={AppRoute.MYLIST}>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </Link>
          :
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

ProfilSignButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

export default ProfilSignButton;
