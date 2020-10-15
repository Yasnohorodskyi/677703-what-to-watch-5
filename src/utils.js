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
