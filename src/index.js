import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import generateOffers from "./mocks/offers.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, ActionType} from "./reducer.js";

const OFFERS_NUMBER = 4;

const placesList = generateOffers(OFFERS_NUMBER);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch({
  type: ActionType.SET_OFFERS,
  payload: placesList,
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
