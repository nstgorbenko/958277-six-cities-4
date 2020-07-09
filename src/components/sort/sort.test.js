import React from "react";
import renderer from "react-test-renderer";

import {Sort} from "./sort.jsx";

describe(`Sort Component rendering`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<Sort
        activeSortType="Popular"
        onSortTypeChange={() => {}}
        isActive={false}
        onActiveChange={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
