import PropTypes from "prop-types";

export const placeCardPropTypes = PropTypes.exact({
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
}).isRequired;
