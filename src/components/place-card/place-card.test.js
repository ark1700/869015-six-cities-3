import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const emptyFunc = () => {};

it(`Should PlaceCard render correctly`, () => {
  const placeItem = {
    city: `Amsterdam`,
    name: `Wood and stone place`,
    price: 500,
    type: `apartment`,
    rating: 4,
    isFavorite: true,
    isPremium: true,
  };

  const tree = renderer
    .create(<PlaceCard
      placeCard={placeItem}
      onPlaceCardMouseOver={emptyFunc}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should PlaceCard render correctly`, () => {
  const placeItem = {
    city: `Paris`,
    name: `Canal View Prinsengracht`,
    price: 0,
    type: `privare room`,
    rating: 0,
    isFavorite: false,
    isPremium: false,
  };

  const tree = renderer
    .create(<PlaceCard
      placeCard={placeItem}
      onPlaceCardMouseOver={emptyFunc}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
