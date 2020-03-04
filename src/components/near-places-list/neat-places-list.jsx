import React from "react";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import {getRaitingWidth} from "../../utils/utils.js";

const NearPlaces = (props) => {
  const {nearPlaces} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((place, i) => {
          const {photos, price, rating, isFavorite, title, type} = place;
          return (
            <article className="near-places__card place-card" key={`near-place-` + i}>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: getRaitingWidth(rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{title}</a>
                </h2>
                <p className="place-card__type">{type}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>

  );
};

NearPlaces.propTypes = {
  nearPlaces: placesListPropTypes,
};


export default NearPlaces;