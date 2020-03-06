import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placeCardPropTypes} from "../../prop-types/place-card.prop-types.js";
import {getRaitingWidth} from "../../utils/utils.js";
import {Link} from "react-router-dom";


class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlaceCardMouseOver = this.handlePlaceCardMouseOver.bind(this);
  }

  render() {
    const {photos, title, price, type, rating, isFavorite, isPremium} = this.props.placeCard;
    const {cardClass} = this.props;
    return (
      <article
        className={`place-card ` + cardClass}
        key={name}
        onMouseOver={this.handlePlaceCardMouseOver}>

        {isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ``
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button  button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRaitingWidth(rating)}} ></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to="/offer">{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }

  handlePlaceCardMouseOver() {
    this.props.setActiveCard(this.props.placeCard);
  }
}

PlaceCard.propTypes = {
  placeCard: placeCardPropTypes,
  setActiveCard: PropTypes.func,
  cardClass: PropTypes.string,
};

export default PlaceCard;
