import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENT_OFFERS: 312
};

ReactDOM.render(
    <App
      rentOffers={Settings.RENT_OFFERS}
    />,
    document.querySelector(`#root`)
);
