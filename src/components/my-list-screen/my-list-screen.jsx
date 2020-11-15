import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FilmsList from "../films-list/films-list";
import {filmType} from "../../custom-prop-types.js";

import withFilmsListHandling from "../../hocs/with-films-list-handling/with-films-list-handling";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getAllFilms} from "../../store/selectors/selectors";


const FilmsListWrapped = withFilmsListHandling(withActiveItem(FilmsList));

const MyListScreen = (props) => {
  const {films, history} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsListWrapped
          films={films}
          history={history}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
