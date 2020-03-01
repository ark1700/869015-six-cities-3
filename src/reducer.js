import {extend} from "./utils/utils.js";
import {Cities} from './utils/consts';

const initialState = {
  activeCity: Cities.AMSTERDAM,
  offersList: [],
  activeCard: null,
};

const ActionType = {
  SET_ACTIVE_SITY: `SET_ACTIVE_SITY`,
  GET_OFFERS: `GET_OFFERS`,
  SET_OFFERS: `SET_OFFERS`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_SITY:
      return extend(state, {
        activeCity: action.payload,
      });

    case ActionType.SET_OFFERS:
      return extend(state, {
        offersList: action.payload,
      });

    case ActionType.SET_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType};
