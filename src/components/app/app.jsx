import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onPlaceNameClick = () => {};

const App = (props) => {
  const {rentOffers, placesList} = props;
  return (
    <Main
      rentOffers={rentOffers}
      placesList={placesList}
      onPlaceNameClick={onPlaceNameClick}
    />
  );
};

App.propTypes = {
  rentOffers: PropTypes.number.isRequired,
  placesList: PropTypes.arrayOf(
      PropTypes.exact({
        city: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
};


export default App;
