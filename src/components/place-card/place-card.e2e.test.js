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

  const placeCard = shallow(
      <PlaceCard
        placeCard={placeItem}
        setActiveCard={onPlaceCardMouseOverFunc}
      />
  );

  placeCard.simulate(`mouseover`);

  expect(onPlaceCardMouseOverFunc.mock.calls.length).toBe(1);
});
