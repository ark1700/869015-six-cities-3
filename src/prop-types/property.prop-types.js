import PropTypes from "prop-types";

export const propertyPropTypes = PropTypes.shape({
  photos: PropTypes.arrayOf(
      PropTypes.string
  ),
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  badrooms: PropTypes.number.isRequired,
  guests: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  features: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
}).isRequired;
