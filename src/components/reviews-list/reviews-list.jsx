import React from "react";
import {reviewsPropTypes} from "../../prop-types/reviews.prop-types.js";
import {getRaitingWidth} from "../../utils/utils.js";
import moment from "moment";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => {
        const {comment, rating, user, date} = review;
        const {avatarUrl, name} = user;
        return (
          <li className="reviews__item" key={`review-` + i}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: getRaitingWidth(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment}
              </p>
              <time className="reviews__time" dateTime={moment(date).format(`YYYY-MM-DD`)}>{moment(date).format(`MMM YYYY`)}</time>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsPropTypes,
};


export default ReviewsList;
