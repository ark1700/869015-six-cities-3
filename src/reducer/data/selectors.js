import NameSpace from '../name-space.js';

export const getOffers = (state) => state[NameSpace.DATA].offersList || [];
export const getActiveCity = (state) => state[NameSpace.DATA].activeCity;
export const getActiveCard = (state) => state[NameSpace.DATA].activeCard;

const DataSelector = {
  getOffers,
  getActiveCity,
  getActiveCard
};

export default DataSelector;
