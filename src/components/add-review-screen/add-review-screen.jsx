import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AddReviewForm from "../add-review-form/add-review-form";
import {Link} from "react-router-dom";
import withFormHandling from "../../hocs/with-form-handling/with-form-handling";
import {getAuthorizationStatus, getCurrentFilm} from "../../store/selectors/selectors";
import {filmType} from "../../custom-prop-types";
import ErrorScreen from "../error-screen/error-screen";
import {fetchFilm} from "../../store/api-action";
import ProfilSignButton from "../profile-sign-button/profile-sign-button";

const AddReviewFormWrapped = withFormHandling(AddReviewForm);

class AddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      loadFilmAction,
      currentFilm,
      match,
    } = this.props;

    if (!currentFilm || Object.keys(currentFilm).length === 0) {
      const filmId = parseInt(match.params.id, 10);
      loadFilmAction(filmId);
    }
  }

  render() {
    const {
      currentFilm,
      match,
      authorizationStatus,
    } = this.props;
    const filmId = parseInt(match.params.id, 10);

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

              <ProfilSignButton
                authorizationStatus={authorizationStatus}
              />
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={currentFilm.fullImg} alt={currentFilm.title} width="218" height="327" />
            </div>
          </div>

          <AddReviewFormWrapped
            filmId={filmId}
          />

        </section>
      </>

    );
  }

}

AddReviewScreen.propTypes = {
  currentFilm: PropTypes.shape(filmType).isRequired,
  loadFilmAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: getCurrentFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmAction(id) {
    dispatch(fetchFilm(id));
  },
});

AddReviewScreen.defaultProps = {
  currentFilm: {},
};

export {AddReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
