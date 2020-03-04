import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types";
import {placeCardPropTypes} from "../../prop-types/place-card.prop-types";
import {connect} from "react-redux";
import {ActionType} from "../../reducer.js";
import {Cities} from "../../utils/consts.js";
import {reviews} from "../../mocks/reviews.js";
import {nearPlaces} from "../../mocks/near-places";


class App extends PureComponent {
  render() {
    const {placesList, activeCard, setActiveCard, activeCity} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              placesList={placesList}
              setActiveCard={setActiveCard}
              activeCity={activeCity}
            />
          </Route>
          <Route exact path="/offer">
            <Property
              offer={activeCard}
              reviews={reviews}
              nearPlaces={nearPlaces}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
  setActiveCity: PropTypes.func,
  activeCard: placeCardPropTypes,
  activeCity: PropTypes.oneOf(Object.values(Cities)),
};

const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
  placesList: state.offersList,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCard(placeItem) {
    dispatch({
      type: ActionType.SET_ACTIVE_CARD,
      payload: placeItem,
    });
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
