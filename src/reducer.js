import {extend} from "./utils/utils.js";

const initialState = {
  activeCity: null,
  offersList: [],
  activeCard: null,
};

const ActionType = {
  SET_ACTIVE_СITY: `SET_ACTIVE_СITY`,
  GET_OFFERS: `GET_OFFERS`,
  SET_OFFERS: `SET_OFFERS`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_СITY:
      return extend(state, {
        activeCity: action.payload,
      });

    case ActionType.SET_OFFERS:
      return extend(state, {
        offersList: action.payload,
        activeCity: action.payload[0].city,
      });

    case ActionType.SET_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType};
