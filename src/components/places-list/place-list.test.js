import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";

it(`Should PlacesList render correctly`, () => {
  const placesList = [
    {
      city: `Amsterdam`,
      name: `Wood and stone place`,
      price: 0,
      type: `private room`,
      rating: 0,
      isFavorite: true,
      isPremium: true,
    },
    {
      city: `cologne`,
      name: `Beautiful & luxurious apartment at great location`,
      price: 500,
      type: `apartment`,
      rating: 3,
      isFavorite: false,
      isPremium: false,
    },
    {
      city: `dusseldorf`,
      name: `Canal View Prinsengracht`,
      price: 1100,
      type: `apartment`,
      rating: 5,
      isFavorite: true,
      isPremium: false,
    }
  ];

  const tree = renderer
    .create(<PlacesList
      placesList={placesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
