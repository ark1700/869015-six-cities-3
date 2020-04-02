import React, {PureComponent} from "react";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {getRaitingWidth} from "../../utils/utils.js";
import {placeCardPropTypes} from "../../prop-types/place-card.prop-types.js";
import Map from "../map/map.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import {reviewPropTypes} from "../../prop-types/review.prop-types.js";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";

class Property extends PureComponent {
  constructor(props) {
    super(props);

    this._offerPhotosMarkup = this._offerPhotosMarkup.bind(this);
    this._offerFeaturesMarkup = this._offerFeaturesMarkup.bind(this);
  }

  _offerPhotosMarkup(photosSrc) {
    const markup = photosSrc.map((photo, i) => {
      return (
        <div className="property__image-wrapper" key={i}>
          <img className="property__image" src={photo} alt="Photo studio"/>
        </div>
      );
    });
    return (
      <div className="property__gallery">
        {markup}
      </div>
    );
  }

  _offerFeaturesMarkup(offerFeatures) {
    const markup = offerFeatures.map((feature, i) => {
      return (
        <li className="property__inside-item" key={i}>
          {feature}
        </li>
      );
    });
    return (
      <ul className="property__inside-list">
        {markup}
      </ul>
    );
  }

  render() {
    const {photos, isPremium, price, title, descr, type, badrooms, guests, rating, features, city} = this.props.offer;
    const {name, avatar, isSuper} = this.props.offer.author;
    const {reviews, nearPlaces, setActiveCard} = this.props;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            {photos ?
              <div className="property__gallery-container container">
                {this._offerPhotosMarkup(photos)}
              </div>
              : ``
            }

            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : ``
                }

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: getRaitingWidth(rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {badrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  {this._offerFeaturesMarkup(features)}
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``}`}>
                      <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {descr}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews} />
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            {/* {!(nearPlaces === undefined || nearPlaces.length === 0) && (
              <Map
                cityCoords={city}
                placesList={[...nearPlaces, this.props.offer]}
                mapClass={`property__map`}
              />
            )} */}
          </section>
          <div className="container">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {/* {!(nearPlaces === undefined || nearPlaces.length === 0) && (
              <PlacesList
                placesList={nearPlaces}
                setActiveCard={setActiveCard}
                listClass={`near-places__list`}
                cardClass={`near-places__card`}
              />
            )} */}
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  offer: placeCardPropTypes,
  // nearPlaces: placesListPropTypes,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  setActiveCard: PropTypes.func,
};

export default Property;
