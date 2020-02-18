import PropTypes from "prop-types";

export const placeCardPropTypes = PropTypes.shape({
  photos: PropTypes.arrayOf(
      PropTypes.string
  ),
  city: PropTypes.string,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  badrooms: PropTypes.number.isRequired,
  guests: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
}).isRequired;
