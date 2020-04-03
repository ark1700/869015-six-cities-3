import NameSpace from '../name-space.js';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserPicture = (state) => state[NameSpace.USER].loginInfo && state[NameSpace.USER].loginInfo[`avatar_url`];
export const getUserEmail = (state) => state[NameSpace.USER].loginInfo && state[NameSpace.USER].loginInfo[`email`];
export const getIsUserSuper = (state) => state[NameSpace.USER].loginInfo && state[NameSpace.USER].loginInfo[`is_pro`];
export const getUserInfo = (state) => (state[NameSpace.USER].loginInfo);

const Selector = {
  getAuthStatus,
  getUserPicture,
  getUserEmail,
  getIsUserSuper,
  getUserInfo
};

export default Selector;
