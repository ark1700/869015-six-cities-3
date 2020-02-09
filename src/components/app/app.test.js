import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const emptyFunc = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentOffers={369}
      placesList={[`Canal View Prinsengracht`, `Wood and stone place`]}
      onWelcomeButtonClick={emptyFunc}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
