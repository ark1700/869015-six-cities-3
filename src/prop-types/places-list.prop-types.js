import PropTypes from "prop-types";
import {placeCardPropTypes} from "./place-card.prop-types.js";

export const placesListPropTypes = PropTypes.arrayOf(
    placeCardPropTypes
).isRequired;
