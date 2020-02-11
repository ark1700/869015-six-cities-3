import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place name link be pressed`, () => {
  const onPlaceNameClick = jest.fn();

  const placesList = [`Canal View Prinsengracht`, `Wood and stone place`];
  const placeNameClicks = placesList.length;

  const main = shallow(
      <Main
        rentOffers={369}
        placesList={placesList}
        onPlaceNameClick={onPlaceNameClick}
      />
  );

  const PlaceNames = main.find(`.place-card__name a`);

  PlaceNames.forEach((placeName) => placeName.simulate(`click`));

  expect(onPlaceNameClick.mock.calls.length).toBe(placeNameClicks);
});
