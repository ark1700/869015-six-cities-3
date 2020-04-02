import PropTypes from "prop-types";
import {cityPropTypes} from "./city.prop-types";

export const placeCardPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(
      PropTypes.string
  ),
  previewImage: PropTypes.string,
  city: cityPropTypes,
  map: PropTypes.shape({
    location: PropTypes.arrayOf(
        PropTypes.number
    ),
    zoom: PropTypes.number,
  }),
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  badrooms: PropTypes.number,
  guests: PropTypes.number,
  rating: PropTypes.number,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  features: PropTypes.arrayOf(
      PropTypes.string
  ),
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isSuper: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
});
