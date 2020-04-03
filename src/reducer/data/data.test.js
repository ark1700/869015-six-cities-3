// import MockAdapter from "axios-mock-adapter";
// import {createAPI} from "../../api.js";
import {reducer, ActionType} from "./data.js";

const placesList = [
  {
    id: 1,
    previewImage: `img/room.jpg`,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      },
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    isPremium: false,
    price: 200,
    title: `Wood and stone place`,
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Apartment`,
    badrooms: 1,
    guests: 4,
    rating: 3.7,
    author: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true,
      id: 25
    },
    features: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    isFavorite: true,
    map: {
      location: [
        52.36354,
        4.911976
      ],
      zoom: 16
    },
  },
  {
    id: 2,
    previewImage: `img/room.jpg`,
    city: {
      name: `brussels`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      },
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    isPremium: true,
    price: 300,
    title: `House in countryside`,
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `room`,
    badrooms: 2,
    guests: 3,
    rating: 2.1,
    author: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false,
      id: 26
    },
    features: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    isFavorite: false,
    map: {
      location: [
        52.36354,
        4.911976
      ],
      zoom: 16
    },
  },
];

const initialState = {
  activeCity: null,
  offersList: [],
  activeCard: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should set new activeCity`, () => {
  expect(reducer(initialState, {
    type: ActionType.LOAD_OFFERS,
    payload: placesList,
  })).toEqual({
    activeCity: placesList[0].city,
    offersList: placesList,
    activeCard: null,
  });
});
