import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {placesList} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {placesList.slice()
          .map((placeItem, i) => <PlaceCard
            key={`place-card-${i}`}
            placeCard={placeItem}
            onPlaceCardMouseOver={() => {}}/>)
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  placesList: PropTypes.arrayOf(
      PropTypes.exact({
        city: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired
};

export default PlacesList;
