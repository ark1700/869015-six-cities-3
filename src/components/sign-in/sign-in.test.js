import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in.jsx';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../utils/consts';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }
});

describe(`SignIn snapshot test`, () => {
  it(`should be rendered correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <SignIn />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
