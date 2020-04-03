import {reducer, ActionType, Operation} from './user.js';
import {AuthorizationStatus} from '../../utils/consts.js';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';

const api = createAPI(() => undefined);
const apiMock = new MockAdapter(api);

const responseUser = {
  [`avatar_url`]: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  [`is_pro`]: false,
  name: `Oliver.conner`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  loginInfo: null,
};

describe(`Test User reducer`, () => {
  it(`should return initialState when called with an unknown action`, () => {
    expect(reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it(`should change an authorization status by payload`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      loginInfo: null
    }, {
      type: ActionType.SET_AUTH_STATUS,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      loginInfo: null
    });
  });

  it(`should change an authInfo by payload`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      loginInfo: null
    }, {
      type: ActionType.SET_LOGIN_INFO,
      payload: {email: `aaa@ee.ee`}
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      loginInfo: {email: `aaa@ee.ee`}
    });
  });
});

it(`should call a dispatch twice with correct payload when user is authorized`, () => {
  const dispatch = jest.fn();

  apiMock.onGet(`/login`).reply(200, responseUser);

  const loader = Operation.checkAuth();

  return loader(dispatch, () => undefined, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_AUTH_STATUS,
        payload: AuthorizationStatus.AUTH
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_LOGIN_INFO,
        payload: responseUser,
      });
    });
});

