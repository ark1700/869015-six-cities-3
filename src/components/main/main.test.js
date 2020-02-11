import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const emptyFunc = () => {};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      rentOffers={369}
      placesList={[`Canal View Prinsengracht`, `Wood and stone place`]}
      onPlaceNameClick={emptyFunc}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
