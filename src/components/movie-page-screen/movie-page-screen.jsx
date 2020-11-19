import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType, reviewType} from "../../custom-prop-types";
import {getRatingDesc} from "../../utils.js";

import FilmsList from "../films-list/films-list";
import Tabs from "../tabs/tabs";
import {connect} from "react-redux";

import withTabsHandling from "../../hocs/with-tabs-handling/with-tabs-handling";
import withFilmsListHandling from "../../hocs/with-films-list-handling/with-films-list-handling";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getAllFilms, getAllReviews} from "../../store/selectors/selectors";


const FilmsListWrapped = withFilmsListHandling(withActiveItem(FilmsList));
const TabsWrapped = withTabsHandling(Tabs);

const TabLabels = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};


const getOverviewContent = (currentFilm) => {
  const {
    description,
    rating,
    scoresCount,
    director,
    starring,
  } = currentFilm;
  const shortStarring = starring.slice(0, 4).join(`, `);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingDesc(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {shortStarring} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

const getDetailsContent = (currentFilm) => {
  const {
    duration,
    releaseDate,
    director,
    starring,
    genre
  } = currentFilm;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.slice(0, -1).map((star) =>
              <React.Fragment key={star}>
                {`${star}, `} <br />
              </React.Fragment>
            )}
            {starring.slice(-1)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{duration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

const getReviewContent = (review, index) => {
  const {
    text,
    author,
    dateTime,
    rating,
  } = review;

  return (
    <div className="review" key={`review-${index}`}>
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateTime}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};
const getReviewsContent = (reviews) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, 3).map((review, index) => getReviewContent(review, index))}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.slice(3, 6).map((review, index) => getReviewContent(review, index))}
      </div>
    </div>
  );
};

const MoviePageScreen = (props) => {
  const {allFilms, allReviews} = props;
  const filmId = parseInt(props.match.params.id, 10);

  const currentFilm = allFilms.find((film) => film.id === filmId);
  const {
    title,
    fullImg,
    genre,
    releaseDate,
    similarFilmsID,
  } = currentFilm;

  const similarFilms = allFilms.filter(
      (film) => similarFilmsID.some(
          (similarID) => film.id === similarID
      )
  );
  const reviews = allReviews.find((review) => review.filmId === filmId).reviews;
  const tabs = [
    {
      id: TabLabels.OVERVIEW,
      title: TabLabels.OVERVIEW,
      render: () => getOverviewContent(currentFilm),
    },
    {
      id: TabLabels.DETAILS,
      title: TabLabels.DETAILS,
      render: () => getDetailsContent(currentFilm),
    },
    {
      id: TabLabels.REVIEWS,
      title: TabLabels.REVIEWS,
      render: () => getReviewsContent(reviews),
    },
  ];

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={`${fullImg}`} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={`/player/${filmId}`}>
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              <Link to={`/mylist`}>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </Link>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div >

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={fullImg} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <TabsWrapped
              tabs={tabs}
            />
          </div>
        </div>
      </div>
    </section >

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <FilmsListWrapped
          films={similarFilms.slice(0, 4)}
          history={props.history}
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
  </React.Fragment>;
};

MoviePageScreen.propTypes = {
  allFilms: PropTypes.arrayOf(filmType).isRequired,
  allReviews: PropTypes.arrayOf(reviewType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  allReviews: getAllReviews(state),
});

export {MoviePageScreen};
export default connect(mapStateToProps)(MoviePageScreen);
