import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  render() {
    const {rentOffers, placesList} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              rentOffers={rentOffers}
              placesList={placesList}
              setActiveCard={this.setActiveCard}
            />
          </Route>
          <Route exact path="/offer">
            <Property offer={this.state.activeCard} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  setActiveCard(placeItem) {
    this.setState({activeCard: placeItem});
  }
}

App.propTypes = {
  rentOffers: PropTypes.number.isRequired,
  placesList: placesListPropTypes,
  setActiveCard: PropTypes.func,
};


export default App;
