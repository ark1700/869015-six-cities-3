import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import PropTypes from "prop-types";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {placesList, setActiveCard} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {placesList
          .map((placeItem, i) => {
            return <PlaceCard
              key={`place-card-${i}`}
              placeCard={placeItem}
              setActiveCard={setActiveCard}
            />;
          })
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
};

export default PlacesList;
