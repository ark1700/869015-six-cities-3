import React from "react";
import {reviewPropTypes} from "../../prop-types/review.prop-types.js";
import Review from "../review/review.jsx";
import PropTypes from "prop-types";
import moment from "moment";

const MAX_REVIEWS_NUMBER = 10;

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews
        .slice(-MAX_REVIEWS_NUMBER)
        .sort((a, b) => {
          if (moment(b.date).isAfter(a.date)) {
            return -1;
          }
          return 1;
        })
        .map((review, i) => {
          return (
            <Review
              review={review}
              key={i}
            />
          );
        })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes),
};


export default ReviewsList;
