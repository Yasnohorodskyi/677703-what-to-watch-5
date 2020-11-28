import {RatingDesc} from "./const.js";

export const getRatingDesc = (rating) => {
  let level = `Who knows?`;

  if (rating <= 3) {
    level = RatingDesc.BAD;
  } else if (rating <= 5) {
    level = RatingDesc.Normal;
  } else if (rating <= 8) {
    level = RatingDesc.GOOD;
  } else if (rating < 10) {
    level = RatingDesc.VERY_GOOD;
  } else if (rating === 10) {
    level = RatingDesc.AWESOME;
  }
  return level;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getReviewDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString(`default`, {month: `long`});
  const year = date.getFullYear();
  const day = date.getDay();

  return {
    forHuman: `${month} ${day}, ${year}`,
    forRobot: `${year}-${date.getMonth() + 1}-${day}`,
  };
};

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const adaptFilm = (film) => ({
  id: film[`id`],
  title: film[`name`],
  fullImg: film[`poster_image`],
  coverImg: film[`preview_image`],
  backgroundImage: film[`background_image`],
  backgroundColor: film[`background_color`],
  video: film[`video_link`],
  previewVideoLink: film[`video_link`],
  description: film[`description`],
  rating: film[`rating`],
  scoresCount: film[`scores_count`],
  director: film[`director`],
  starring: film[`starring`],
  duration: film[`run_time`],
  genre: film[`genre`],
  releaseDate: film[`released`],
  isFavorite: film[`is_favorite`],
  similarFilmsID: [3, 7, 9],
});

export const adaptComment = (comment) => ({
  id: comment.id,
  userID: comment.user.id,
  userName: comment.user.name,
  rating: comment.rating,
  text: comment.comment,
  date: comment.date,
});
