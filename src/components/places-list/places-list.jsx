import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import PropTypes from "prop-types";
import {firstUpperLetter} from "../../utils/utils";
import {Cities} from "../../utils/consts.js";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {placesList, setActiveCard, activeCity} = this.props;
    return (
      <section className="cities__places places">

        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {placesList.length} places to stay in {firstUpperLetter(activeCity)}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"> </use>
            </svg>
          </span>
          <ul className="places__options places__options--custom">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
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
      </section>
    );
  }
}

PlacesList.propTypes = {
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
  activeCity: PropTypes.oneOf(Object.values(Cities)),
};

export default PlacesList;
