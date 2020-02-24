import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

it(`Render Map`, () => {
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

  const cityCoords = [52.38333, 4.9];
  jest.mock(`leaflet`);
  const tree = renderer
    .create(<Map
      placesList={placesList}
      cityCoords={cityCoords}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
