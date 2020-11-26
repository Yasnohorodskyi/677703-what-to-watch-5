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
