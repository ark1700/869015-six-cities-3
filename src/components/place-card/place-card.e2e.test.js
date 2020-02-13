import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place name link be pressed`, () => {
  const onPlaceCardMouseOverFunc = jest.fn();

  const placeItem = {
    city: `Amsterdam`,
    name: `Wood and stone place`,
    price: 500,
    type: `apartment`,
    rating: 4,
    isFavorite: true,
    isPremium: true,
  };

  const placeCard = shallow(
      <PlaceCard
        placeCard={placeItem}
        setActiveCard={onPlaceCardMouseOverFunc}
      />
  );

  placeCard.simulate(`mouseover`);

  expect(onPlaceCardMouseOverFunc.mock.calls.length).toBe(1);
});
