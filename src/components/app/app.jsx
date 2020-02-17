import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placesListPropTypes} from "../../prop-types/places-list.prop-types";
import {propertyMock} from "../../mocks/property.js";

const Page = {
  MAIN: `main`,
  PROPERTY: `property`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: Page.MAIN,
    };

    this._onNameCardClick = this._onNameCardClick.bind(this);
    this._renderGameScreen = this._renderGameScreen.bind(this);
  }

  _renderGameScreen() {
    const {page} = this.state;
    const {rentOffers, placesList} = this.props;

    switch (page) {
      case Page.MAIN:
        return (
          <Main
            rentOffers={rentOffers}
            placesList={placesList}
            onPlaceNameClick={this._onNameCardClick}
          />
        );
      case Page.PROPERTY:
        return (
          <Property offer={propertyMock} />
        );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/offer">
            <Property offer={propertyMock} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _onNameCardClick() {
    this.setState({page: Page.PROPERTY});
  }
}

App.propTypes = {
  rentOffers: PropTypes.number.isRequired,
  placesList: placesListPropTypes,
};


export default App;
