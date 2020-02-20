const MIN_OFFER_PRICE = 100;
const MAX_OFFER_PRICE = 1000;
const MIN_OFFER_GUESTS = 1;
const MAX_OFFER_GUESTS = 5;
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

const MapCoordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
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
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    city: getRandomFromObj(OffersCities),
    title: getRandomFromArray(OffersNames),
    descr: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,

    price: Math.floor(MIN_OFFER_PRICE + Math.random() * (MAX_OFFER_PRICE - MIN_OFFER_PRICE)),
    type: getRandomFromObj(OffersTypes),
    badrooms: Math.floor(MIN_OFFER_GUESTS + Math.random() * (MAX_OFFER_GUESTS - MIN_OFFER_GUESTS)),
    guests: `Max ${Math.floor(MIN_OFFER_GUESTS + Math.random() * (MAX_OFFER_GUESTS - MIN_OFFER_GUESTS))} adaults`,
    rating: Math.round(Math.random() * MAX_OFFER_RATING),
    isFavorite: (Math.random() > 0.5),
    isPremium: (Math.random() > 0.5),
    features: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    author: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: (Math.random() > 0.5),
    },
  };
};

const generateOffers = (offersNumber) => {
  return new Array(offersNumber)
    .fill(``)
    .map(generateOffer)
    .map((offer, i) => (Object.assign(offer, {map: MapCoordinates[i]})));
};

export default generateOffers;
