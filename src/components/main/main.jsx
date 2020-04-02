import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types.js";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import {SortTypes} from "../../utils/consts.js";
import {firstUpperLetter} from "../../utils/utils.js";
import {cityPropTypes} from "../../prop-types/city.prop-types";
import Sort from "../sort/sort.jsx";


class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.activeSortType = SortTypes.POPULAR;
    this.setSortType = this.setSortType.bind(this);
    this.state = {activeSortType: SortTypes.POPULAR};
  }

  render() {
    const {placesList, setActiveCard, activeCity} = this.props;
    const activeSortType = this.state.activeSortType;
    const noPlaces = placesList === undefined || placesList.length === 0;
    const sortedPlacesList = placesList.filter((placeItem) => {
      return placeItem.city.name === this.props.activeCity.name;
    });
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className={
          `page__main page__main--index
          ${noPlaces ? `page__main--index-empty` : ``}`
        }>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            {noPlaces ?
              null :
              <CitiesList
                placesList={placesList}
                activeCity={activeCity}
              />
            }
          </div>
          <div className="cities">
            <div className={
              `cities__places-container container
              ${noPlaces ? `cities__places-container--empty` : ``}`
            }>
              {noPlaces ?
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property availbale at the moment</p>
                  </div>
                </section> :
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {sortedPlacesList.length} places to stay in {firstUpperLetter(activeCity.name)}
                  </b>
                  {<Sort
                    activeSortType={activeSortType}
                    setSortType={this.setSortType}
                  />}
                  {<PlacesList
                    sortType={activeSortType}
                    placesList={sortedPlacesList}
                    setActiveCard={setActiveCard}
                    cardClass={`cities__place-card`}
                    listClass={`cities__places-list tabs__content`}
                  />}
                </section>
              }

              <div className="cities__right-section">
                {!noPlaces && (
                  <Map
                    placesList={sortedPlacesList}
                    cityCoords={[activeCity.location.latitude, activeCity.location.longitude]}
                    zoom={activeCity.location.zoom}
                    mapClass={`cities__map`}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  setSortType(sortType) {
    this.setState({activeSortType: sortType});
  }
}

Main.propTypes = {
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
  activeCity: cityPropTypes,
};


export default Main;
