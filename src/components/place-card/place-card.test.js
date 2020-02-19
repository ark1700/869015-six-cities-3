import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {BrowserRouter, Route} from "react-router-dom";

const emptyFunc = () => {};

it(`Should PlaceCard render correctly`, () => {
  const placeItem = {
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
    title: `Beautiful & luxurious studio at great location`,
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
  };

  const tree = renderer
    .create(
        <BrowserRouter>
          <Route exact path="/">
            <PlaceCard
              placeCard={placeItem}
              onPlaceCardMouseOver={emptyFunc}
            />
          </Route>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

