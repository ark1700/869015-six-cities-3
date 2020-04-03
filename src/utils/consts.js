const SortTypes = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const AppRoute = {
  getLogin: () => `/login`,
  getOffer: (id) => `/offer/${id}`,
  getFavorites: () => `/favorites`,
  getRoot: () => `/`,
};

export {SortTypes, AppRoute};

