
import {AuthorizationStatus, AppRoute} from '../../utils/consts';

const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_LOGIN_INFO: `SET_LOGIN_INFO`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  loginInfo: null,
};


const ActionCreator = {
  setAuthStatus: (status) => {
    return {
      type: ActionType.SET_AUTH_STATUS,
      payload: status,
    };
  },
  setLoginInfo: (authInfo) => {
    return {
      type: ActionType.SET_LOGIN_INFO,
      payload: authInfo,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_LOGIN_INFO:
      return Object.assign({}, state, {
        loginInfo: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(AppRoute.getLogin())
      .then((response) => {
        dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setLoginInfo(response.data));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(AppRoute.getLogin(), {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setLoginInfo(authData));
      });
  },
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
