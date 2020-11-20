import React from "react";
import {getRatingDesc} from "../../utils.js";

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

export const getTabsContent = (currentFilm, reviews) => {
  return [
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
};
