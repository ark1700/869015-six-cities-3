import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import PropTypes from "prop-types";
import {Cities, SortTypes} from "../../utils/consts.js";


class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeCard: null};
    this.sortPlacesList = this.sortPlacesList.bind(this);
  }

  render() {
    const {placesList, setActiveCard, listClass, cardClass} = this.props;
    const sortedPlacesList = this.sortPlacesList(placesList);

    return (
      <div className={`places__list ` + listClass}>
        {sortedPlacesList
          .map((placeItem, i) => {
            return <PlaceCard
              key={`place-card-${i}`}
              placeCard={placeItem}
              setActiveCard={setActiveCard}
              cardClass={cardClass}
            />;
          })
        }
      </div>
    );
  }

  sortPlacesList(placesList) {
    let sortedPlacesList;
    switch (this.props.sortType) {
      case SortTypes.PRICE_TO_LOW:
        sortedPlacesList = placesList.slice().sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case SortTypes.PRICE_TO_HIGH:
        sortedPlacesList = placesList.slice().sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case SortTypes.TOP_RATED:
        sortedPlacesList = placesList.slice().sort((a, b) => {
          return b.rating - a.rating;
        });
        break;
      default:
        sortedPlacesList = placesList.slice();
        break;
    }
    return sortedPlacesList;
  }
}

PlacesList.propTypes = {
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
  activeCity: PropTypes.oneOf(Object.values(Cities)),
  listClass: PropTypes.string,
  cardClass: PropTypes.string,
  sortType: PropTypes.string,
};

export default PlacesList;
