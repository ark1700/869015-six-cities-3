import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import PropTypes from "prop-types";
import {Cities} from "../../utils/consts.js";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {placesList, setActiveCard, listClass, cardClass} = this.props;
    return (
      <div className={`places__list ` + listClass}>
        {placesList
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
}

PlacesList.propTypes = {
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
  activeCity: PropTypes.oneOf(Object.values(Cities)),
  listClass: PropTypes.string,
  cardClass: PropTypes.string,
};

export default PlacesList;
