import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import PropTypes from "prop-types";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};

    this.setActiveCard = this.setActiveCard.bind(this);
  }

  render() {
    const {placesList, onPlaceNameClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {placesList
          .map((placeItem, i) => {
            return <PlaceCard
              key={`place-card-${i}`}
              placeCard={placeItem}
              setActiveCard={this.setActiveCard}
              onPlaceNameClick={onPlaceNameClick}
            />;
          })
        }
      </div>
    );
  }

  setActiveCard(placeItem) {
    this.setState({activeCard: placeItem});
  }
}

PlacesList.propTypes = {
  placesList: placesListPropTypes,
  onPlaceNameClick: PropTypes.func,
};

export default PlacesList;
