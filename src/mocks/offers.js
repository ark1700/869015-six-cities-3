const MIN_OFFER_PRICE = 100;
const MAX_OFFER_PRICE = 1000;
const MAX_OFFER_RATING = 5;

const OffersTypes = {
  APARTMENT: `apartment`,
  PRIVATE: `privete room`,
};

const OffersCities = {
  PARIS: `paris`,
  COLOGNE: `cologne`,
  BRUSSELS: `brussels`,
  AMSTERDAM: `amsterdam`,
  HAMBURG: `hamburg`,
  DUSSELDORF: `dusseldorf`,
};

const OffersNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];


const getRandomFromArray = (items) => {
  const itemsArray = Array.from(items);
  const randomIndex = Math.floor(Math.random() * itemsArray.length);
  return itemsArray[randomIndex];
};

const getRandomFromObj = (items) => {
  const itemsArray = Object.keys(items).map((k) => items[k]);
  const randomIndex = Math.floor(Math.random() * itemsArray.length);
  return itemsArray[randomIndex];
};

const generateOffer = () => {
  return {
    city: getRandomFromObj(OffersCities),
    name: getRandomFromArray(OffersNames),
    price: Math.floor(MIN_OFFER_PRICE + Math.random() * (MAX_OFFER_PRICE - MIN_OFFER_PRICE)),
    type: getRandomFromObj(OffersTypes),
    rating: Math.round(Math.random() * MAX_OFFER_RATING),
    isFavorite: (Math.random() > 0.5),
    isPremium: (Math.random() > 0.5),
  };
};

const generateOffers = (offersNumber) => {
  return new Array(offersNumber)
    .fill(``)
    .map(generateOffer);
};

export default generateOffers;
