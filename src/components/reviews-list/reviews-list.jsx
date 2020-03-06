import React from "react";
import {reviewPropTypes} from "../../prop-types/review.prop-types.js";
import Review from "../review/review.jsx";
import PropTypes from "prop-types";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => {
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
