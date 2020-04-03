import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import {firstUpperLetter} from "../../utils/utils.js";
import {connect} from "react-redux";
import {cityPropTypes} from "../../prop-types/city.prop-types";
import {ActionType as DataActionType} from "../../reducer/data/data";
import DataSelectors from "../../reducer/data/selectors.js";

const MAX_OFFERS_NUMBER = 6;

const getSixUniqueCitiesName = (offersList) => {
  return Array.from(
      new Set(
          offersList.map((placeItem) => placeItem.city.name)
      )
  ).slice(-MAX_OFFERS_NUMBER);
};

const getSixUniqueCities = (offersList) => {
  const uniqCitiesNames = getSixUniqueCitiesName(offersList);
  return uniqCitiesNames.map((cityName) => {
    let city = {};
    for (const offer of offersList) {
      if (offer.city.name === cityName) {
        city = offer.city;
        break;
      }
    }
    return city;
  });
};

class CitiesList extends PureComponent {
  render() {
    const {placesList, activeCity, setActiveCity} = this.props;
    const uniqCities = getSixUniqueCities(placesList);
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {uniqCities.map((city, i) => {
            const isActive = activeCity.name === city.name;
            const cityClickHandler = () => {
              return setActiveCity(city);
            };
            return (
              <li className="locations__item" key={i}>
                <a
                  className={`locations__item-link tabs__item
                  ${isActive ? `tabs__item--active` : ``}`}
                  href="#" onClick={cityClickHandler}>
                  <span>
                    {firstUpperLetter(city.name)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

CitiesList.propTypes = {
  placesList: placesListPropTypes,
  activeCity: cityPropTypes,
  setActiveCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  placesList: DataSelectors.getOffers(state),
  activeCity: DataSelectors.getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCity(city) {
    dispatch({
      type: DataActionType.SET_ACTIVE_СITY,
      payload: city,
    });
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
