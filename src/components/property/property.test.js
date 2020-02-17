import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

it(`Should PlaceCard render correctly`, () => {
  const property = {
    photos: [
      `img/room.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    isPremium: true,
    price: 2000,
    title: `Wood and stone place`,
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Privete room`,
    badrooms: 3,
    guests: `Max 3 adaults`,
    rating: 3.9,
    author: {
      name: `rad`,
      avatar: `img/avatar-max.jpg`,
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
      `Baby seat`,
    ],
  };

  const tree = renderer
    .create(<Property offer={property} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
