import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header.jsx';
import {AuthorizationStatus} from '../../utils/consts';

describe(`Header snapshot test`, () => {
  it(`should be rendered correctly when the user is not authorized`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header
            authStatus={AuthorizationStatus.NO_AUTH}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should be rendered correctly when the user is authorized`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header
            userPicture="img/user.jpg"
            userEmail="aaa@ee.ee"
            isUserSuper={true}
            authStatus={AuthorizationStatus.AUTH}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
