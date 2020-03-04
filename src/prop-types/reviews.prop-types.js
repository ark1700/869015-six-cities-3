import PropTypes from "prop-types";

export const reviewsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
);
