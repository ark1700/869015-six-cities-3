import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};

    this.setActiveCard = this.setActiveCard.bind(this);
  }

  render() {
    const {placesList} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {placesList
          .map((placeItem, i) => {
            return <PlaceCard
              key={`place-card-${i}`}
              placeCard={placeItem}
              setActiveCard={this.setActiveCard}/>;
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
};

export default PlacesList;
