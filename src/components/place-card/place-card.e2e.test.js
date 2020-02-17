import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place name link be pressed`, () => {
  const onPlaceCardMouseOverFunc = jest.fn();
  const onPlaceNameClickFunc = jest.fn();

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
        onPlaceNameClick={onPlaceNameClickFunc}
      />
  );

  placeCard.simulate(`mouseover`);

  const namePlaceCard = placeCard.find(`.place-card__name a`);
  namePlaceCard.simulate(`click`);

  expect(onPlaceCardMouseOverFunc.mock.calls.length).toBe(1);
  expect(onPlaceNameClickFunc.mock.calls.length).toBe(1);
});
