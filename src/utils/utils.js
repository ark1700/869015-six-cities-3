const MAX_REITING = 5;

const getRaitingWidth = (ratingNumber) => {
  const rating = Math.floor(ratingNumber);
  return (rating / MAX_REITING * 100) + `%`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const firstUpperLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export {getRaitingWidth, extend, firstUpperLetter};
