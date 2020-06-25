import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const testOffers = [{
  id: `1`,
  location: [52.3709553943508, 4.90309666406198],
  name: `Stylish apartment in the citycenter`,
  type: `room`,
  price: 136,
  photo: `img/apartment-small-04.jpg`,
  rating: 4,
  isPremium: false,
  isFavorite: true,
}, {
  id: `2`,
  location: [52.3809553943508, 4.87309666406198],
  name: `Beautiful Van Gogh studio`,
  type: `room`,
  price: 90,
  photo: `img/room.jpg`,
  rating: 4,
  isPremium: true,
  isFavorite: false,
}];

describe(`Main Component rendering`, () => {
  it(`Main Component should render correctly`, () => {
    const tree = renderer
      .create(<Main
        offers = {testOffers}
        onPlaceCardNameClick = {() => {}}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
