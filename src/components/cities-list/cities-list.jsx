import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import {Cities} from "../../utils/consts.js";
import {firstUpperLetter} from "../../utils/utils.js";
import {connect} from "react-redux";
import {ActionType} from "../../reducer";

const MAX_OFFERS_NUMBER = 6;

const getSixUniqueCities = (offersList) => {
  return Array.from(
      new Set(
          offersList.map((placeItem) => placeItem.city)
      )
  ).slice(-MAX_OFFERS_NUMBER);
};

class CardList extends PureComponent {
  render() {
    const {placesList, activeCity, setActiveCity} = this.props;
    const cities = getSixUniqueCities(placesList);
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => {
            const isActive = activeCity === city;
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
                    {firstUpperLetter(city)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    const {placesList, setActiveCity} = this.props;
    const cities = getSixUniqueCities(placesList);
    if (cities) {
      setActiveCity(cities[0]);
    }
  }

  componentWillUnmount() {
    const {setActiveCity} = this.props;
    setActiveCity(null);
  }
}

CardList.propTypes = {
  placesList: placesListPropTypes,
  activeCity: PropTypes.oneOf(Object.values(Cities)),
  setActiveCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  placesList: state.offersList,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCity(city) {
    dispatch({
      type: ActionType.SET_ACTIVE_СITY,
      payload: city,
    });
  },
});

export {CardList};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
