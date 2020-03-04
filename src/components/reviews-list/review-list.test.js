import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./reviews-list.jsx";

it(`Should ReviewList render correctly`, () => {
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
        <ReviewList
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
