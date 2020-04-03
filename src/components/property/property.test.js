import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

const mockStore = configureStore([]);

const placesList = [
  {
    city: `amsterdam`,
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
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Apartment`,
    badrooms: 1,
    guests: `Max 4 adaults`,
    rating: 3.7,
    author: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false,
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
    map: [52.3909553943508, 4.85309666406198],
  },
  {
    city: `Brussels`,
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    isPremium: true,
    price: 120,
    title: `Canal View Prinsengracht`,
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Apartment`,
    badrooms: 4,
    guests: `Max 4 adaults`,
    rating: 4.8,
    author: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true,
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
    map: [52.369553943508, 4.85309666406198],
  },
];

const store = mockStore({
  DATA: {
    offersList: placesList,
    activeCity: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    activeCard: null
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    loginInfo: null
  }
});

it(`Should Property render correctly`, () => {
  const property = {
    id: 1,
    city: `amsterdam`,
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
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Apartment`,
    badrooms: 1,
    guests: `Max 4 adaults`,
    rating: 3.7,
    author: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false,
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
    map: [52.3909553943508, 4.85309666406198],
  };

  const nearPlaces = [
    {
      city: `amsterdam`,
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
      descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      type: `Apartment`,
      badrooms: 1,
      guests: `Max 4 adaults`,
      rating: 3.7,
      author: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        isSuper: false,
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
      map: [52.3909553943508, 4.85309666406198],
    },
    {
      city: `Brussels`,
      photos: [
        `img/room.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
      ],
      isPremium: true,
      price: 120,
      title: `Canal View Prinsengracht`,
      descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      type: `Apartment`,
      badrooms: 4,
      guests: `Max 4 adaults`,
      rating: 4.8,
      author: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        isSuper: true,
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
      map: [52.369553943508, 4.85309666406198],
    },
  ];

  const reviews = [
    {
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      rating: 3.2,
      date: `2019-05-05T14:13:56.569Z`,
      user: {
        avatarUrl: `img/avatar-max.jpg`,
        name: `Max`
      }
    },
    {
      comment: `A quiet cozy  that hides behind a a river by the unique darkness of Paris. The building is green and from 19th century.`,
      rating: 5,
      date: `2019-05-08T14:13:56.569Z`,
      user: {
        avatarUrl: `img/avatar-max.jpg`,
        name: `Sam`
      }
    },
  ];

  jest.mock(`leaflet`);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/">
              <Property
                offer={property}
                reviews={reviews}
                nearPlaces={nearPlaces}
              />
            </Route>
          </BrowserRouter>
        </Provider>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
