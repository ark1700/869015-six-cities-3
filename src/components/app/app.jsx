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
  placesList: PropTypes.array.isRequired,
};


export default App;
