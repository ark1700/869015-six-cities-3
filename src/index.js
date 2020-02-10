import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENT_OFFERS: 312,
  PLACES_LIST: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
};

ReactDOM.render(
    <App
      rentOffers={Settings.RENT_OFFERS}
      placesList={Settings.PLACES_LIST}
    />,
    document.querySelector(`#root`)
);
