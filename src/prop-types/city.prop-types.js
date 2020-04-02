import PropTypes from "prop-types";

export const cityPropTypes = PropTypes.shape({
  name: PropTypes.string,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }).isRequired
});
