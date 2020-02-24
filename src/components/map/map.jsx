import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import {placesListPropTypes} from "../../prop-types/places-list.prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }

  componentDidMount() {
    const city = this.props.cityCoords;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);


    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);


    const mapCoords = this.props.placesList.map((offer) => offer.map);
    mapCoords.forEach((coordinate) => {
      leaflet
      .marker(coordinate, {icon})
      .addTo(map);
    });
  }
}

Map.propTypes = {
  cityCoords: PropTypes.arrayOf(
      PropTypes.number
  ),
  placesList: placesListPropTypes,
};

export default Map;
