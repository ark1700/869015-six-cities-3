import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import generateOffers from "./mocks/offers.js";

const OFFERS_NUMBER = 4;

const placesList = generateOffers(OFFERS_NUMBER);

const Settings = {
  RENT_OFFERS: 312,
  PLACES_LIST: placesList,
};

ReactDOM.render(
    <App
      rentOffers={Settings.RENT_OFFERS}
      placesList={Settings.PLACES_LIST}
    />,
    document.querySelector(`#root`)
);
