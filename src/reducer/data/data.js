import {extend} from "../../utils/utils.js";

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

const redefinitionOffers = (offersData) => {
  const newOffers = [];
  offersData.forEach((offerData) => {
    const newOffer = {
      id: offerData.id,
      previewImage: offerData.preview_image,
      photos: offerData.images,
      city: offerData.city,
      map: {
        location: [offerData.location.latitude, offerData.location.longitude],
        zoom: offerData.location.zoom,
      },
      title: offerData.title,
      descr: offerData.description,
      price: offerData.price,
      type: offerData.type,
      badrooms: offerData.badrooms,
      guests: offerData.max_adults,
      rating: offerData.rating,
      isFavorite: offerData.is_favorite,
      isPremium: offerData.is_premium,
      features: offerData.goods,
      author: {
        name: offerData.host.name,
        avatar: offerData.host.avatar_url,
        isSuper: offerData.host.is_pro,
        id: offerData.host.id,
      },
    };
    newOffers.push(newOffer);
  });
  return newOffers;
};


export {reducer, ActionType, Operation, ActionCreator};
