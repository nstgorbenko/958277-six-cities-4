import React from "react";
import renderer from "react-test-renderer";

import NoPlaces from "./no-places.jsx";

describe(`NoPlaces Component rendering`, () => {
  it(`NoPlaces Component should render correctly`, () => {
    const tree = renderer
      .create(<NoPlaces
        activeCity="Amsterdam"
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});