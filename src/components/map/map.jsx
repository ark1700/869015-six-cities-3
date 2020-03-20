import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import {placesListPropTypes} from "../../prop-types/places-list.prop-types";
import {connect} from "react-redux";
import {placeCardPropTypes} from "../../prop-types/place-card.prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.markers = [];
  }

  render() {
    return (
      <section className={`map ` + this.props.mapClass} id="map"></section>
    );
  }

  componentDidMount() {
    this.createMap();
    this.addMarkers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityCoords !== this.props.cityCoords ||
      prevProps.activeCard !== this.props.activeCard) {
      const zoom = 12;
      this.map.setView(this.props.cityCoords, zoom);
      this.removeMarkers();
      this.markers = [];
      this.addMarkers();
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  createMap() {
    const city = this.props.cityCoords;
    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);


    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  addMarkers() {
    const mapCoords = this.props.placesList.map((offer) => offer.map);
    mapCoords.forEach((coordinate) => {
      let isActive = false;
      if (this.props.activeCard &&
      coordinate[0] === this.props.activeCard.map[0] &&
      coordinate[1] === this.props.activeCard.map[1]) {
        isActive = true;
      }
      const icon = this.icon(isActive);
      const marker = leaflet
        .marker(coordinate, {icon})
        .addTo(this.map);
      this.markers.push(marker);
    });
  }

  removeMarkers() {
    for (let marker of this.markers) {
      this.map.removeLayer(marker);
    }
  }

  icon(isActive) {
    const icon = isActive ? `img/pin-active.svg` : `img/pin.svg`;
    return leaflet.icon({
      iconUrl: icon,
      iconSize: [30, 30]
    });
  }
}

Map.propTypes = {
  cityCoords: PropTypes.arrayOf(
      PropTypes.number
  ),
  placesList: placesListPropTypes,
  mapClass: PropTypes.string,
  activeCard: placeCardPropTypes,
};

const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
});

export {Map};
export default connect(mapStateToProps)(Map);
