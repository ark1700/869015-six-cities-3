import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

it(`Should Review render correctly`, () => {
  const review = {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 3.2,
    date: `2019-05-05T14:13:56.569Z`,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      name: `Max`
    }
  };

  const tree = renderer
    .create(
        <Review
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
