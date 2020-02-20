const MAX_REITING = 5;

const getRaitingWidth = (ratingNumber) => {
  const rating = Math.floor(ratingNumber);
  return (rating / MAX_REITING * 100) + `%`;
};

export {getRaitingWidth};
