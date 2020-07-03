import React from "react";
import renderer from "react-test-renderer";

import Offer from "./offer.jsx";
import {testPlaces} from "../../test-data.js";

describe(`Offer Component rendering`, () => {
  it(`Offer Component should render correctly`, () => {
    const tree = renderer
      .create(<Offer
        place={testPlaces[0]}
        nearbyPlaces={testPlaces}
        onPlaceCardNameClick={() => {}}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});