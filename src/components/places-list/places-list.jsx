import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {placesList} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {placesList
          .map((placeItem, i) => <PlaceCard
            key={`place-card-${i}`}
            placeCard={placeItem}
            onPlaceCardMouseOver={() => {
              this.setState({activeCard: placeItem});
            }}/>)
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  placesList: placesListPropTypes
};

export default PlacesList;
