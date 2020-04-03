import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types";
import {placeCardPropTypes} from "../../prop-types/place-card.prop-types";
import {connect} from "react-redux";
import {ActionType as DataActionType} from "../../reducer/data/data";
import {reviews} from "../../mocks/reviews.js";
import {nearPlaces} from "../../mocks/near-places";
import {cityPropTypes} from "../../prop-types/city.prop-types";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation} from '../../reducer/user/user';
import DataSelector from '../../reducer/data/selectors.js';
import UserSelector from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../utils/consts';

class App extends PureComponent {
  render() {
    const {placesList, activeCard, setActiveCard, activeCity, authStatus} = this.props;
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
              setActiveCard={setActiveCard}
            />
          </Route>
          <Route exact path="/login">
            {authStatus === AuthorizationStatus.AUTH ? <Redirect to="/" /> :
              <SignIn />
            }
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
  activeCity: cityPropTypes,
  authStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  activeCard: DataSelector.getActiveCard(state),
  placesList: DataSelector.getOffers(state),
  activeCity: DataSelector.getActiveCity(state),
  authStatus: UserSelector.getAuthStatus(state),
  loginInfo: UserSelector.getUserInfo(state),

});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  setActiveCard(placeItem) {
    dispatch({
      type: DataActionType.SET_ACTIVE_CARD,
      payload: placeItem,
    });
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
