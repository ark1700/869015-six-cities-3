import {extend} from "../../utils/utils.js";
import {redefinitionOffers} from "../../adapter.js";


const initialState = {
  offersList: [],
  activeCity: null,
  activeCard: null,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_OFFERS: `GET_OFFERS`,
  SET_ACTIVE_СITY: `SET_ACTIVE_СITY`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
};

const ActionCreator = {
  loadOffers: (placesList) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: placesList,
    };
  },
  setActiveCity: (activeCity) => {
    return {
      type: ActionType.SET_ACTIVE_СITY,
      payload: activeCity,
    };
  },
  setActiveCard: (activeCard) => {
    return {
      type: ActionType.SET_ACTIVE_CARD,
      payload: activeCard,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(redefinitionOffers(response.data)));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offersList: action.payload,
        activeCity: action.payload[0].city,
      });
    case ActionType.SET_ACTIVE_СITY:
      return extend(state, {
        activeCity: action.payload,
      });

    case ActionType.SET_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, Operation, ActionCreator};
