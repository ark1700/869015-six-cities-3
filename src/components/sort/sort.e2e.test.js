import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should mouse over card`, () => {
  const activeSortType = `Popular`;
  const setSortType = jest.fn();

  const sort = shallow(
      <Sort
        activeSortType={activeSortType}
        setSortType={setSortType}
      />
  );

  sort.find(`.places__option:first-child`).simulate(`click`);
  expect(setSortType.mock.calls.length).toBe(1);
});
