import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import * as React from "react";
import {mount} from "enzyme";

import Login from "./login";
import {testUserInfo} from "../../test-data";

const testStore = configureStore([]);
const store = testStore({
  USER: {
    authorizationStatus: `AUTH`,
    info: testUserInfo
  }
});

describe(`Login working test`, () => {
  it(`submits the form`, () => {
    const onSubmit = jest.fn();
    const formSendPrevention = jest.fn();

    const login = mount(
        <BrowserRouter>
          <Provider store={store}>
            <Login
              onSubmit={onSubmit}
              error={false}
            />
          </Provider>
        </BrowserRouter>);

    const form = login.find(`form`);
    form.simulate(`submit`, {
      preventDefault: formSendPrevention
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
