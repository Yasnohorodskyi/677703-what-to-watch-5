import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AddReviewForm from "../add-review-form/add-review-form";
import {Link} from "react-router-dom";
import withFormHanling from "../../hocs/with-form-handling/with-form-handling";
import {getCurrnetFilm} from "../../store/selectors/selectors";
import {filmType} from "../../custom-prop-types";
import ErrorScreen from "../error-screen/error-screen";

const AddReviewFormWrapped = withFormHanling(AddReviewForm);

const AddReviewScreen = (props) => {

  const {currentFilm} = props;

  return (
    <>
      <ErrorScreen />
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`films/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentFilm.fullImg} alt={currentFilm.title} width="218" height="327" />
          </div>
        </div>

        <AddReviewFormWrapped />

      </section>
    </>

  );
};

AddReviewScreen.propTypes = {
  currentFilm: PropTypes.shape(filmType).isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: getCurrnetFilm(state),
});


export default connect(mapStateToProps)(AddReviewScreen);
