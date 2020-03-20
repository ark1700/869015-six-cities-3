import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort.jsx";

it(`Should ReviewList render correctly`, () => {
  const activeSortType = `Popular`;
  const setSortType = () => {};

  const tree = renderer
    .create(
        <Sort
          activeSortType={activeSortType}
          setSortType={setSortType}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
