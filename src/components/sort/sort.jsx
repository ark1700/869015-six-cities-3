import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortTypes} from "../../utils/consts";


class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.sortOpenHander = this.sortOpenHander.bind();
  }

  render() {
    const {activeSortType, setSortType} = this.props;

    return (

      <form className="places__sorting" action="#" method="get" onClick={this.sortOpenHander}>
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0">
          {activeSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"> </use>
          </svg>
        </span>

        <ul className={`places__options places__options--custom`}>
          {Object.values(SortTypes).map((type, i) => {
            const setSortTypeClickHandler = () => {
              setSortType(type);
            };
            return (
              <li
                className={`places__option${activeSortType === type ? ` places__option--active` : ``}`}
                tabIndex="0"
                key={`sort-type-` + i}
                onClick={setSortTypeClickHandler}
              >
                {type}
              </li>
            );
          })}
        </ul>
      </form>
    );
  }

  sortOpenHander(e) {
    const sortOptions = document.querySelector(`.places__options`);
    if (e.target.classList.contains(`places__option`) || e.target.classList.contains(`places__sorting-type`) || e.target.classList.contains(`places__sorting-arrow`)) {
      sortOptions.classList.toggle(`places__options--opened`);
    }
  }
}

Sort.propTypes = {
  sortType: PropTypes.string,
  activeSortType: PropTypes.string,
  setSortType: PropTypes.func,
};


export default Sort;
