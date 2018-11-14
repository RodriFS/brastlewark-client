import React, { Component } from 'react';
import { getProfessions } from '../../utils/professions';
import { Link } from 'react-router-dom';
import './Filters.css';

/**
 * @file gnome-app/src/containers/Filters.js
 * @class Filters
 * @extends React.Component
 * @classdesc This is the Filters component. It displays all the filters you can apply to the gnomes object.
 * @since v1.0
 * @author @rodrifs <rodrifs@gmail.com>
 * <Filters />
 */
class Filters extends Component {
  handleClick = prof => {
    !this.props.filters[prof]
      ? this.props.setFilter({ [prof]: true })
      : this.props.setFilter({ [prof]: false });
  };

  /**
   * @function
   * @name render
   * @memberof Filters
   * @description Maps and renders all filters
   * @return {JSX} Components for Filters
   */
  render() {
    let AllProfs = getProfessions(this.props.gnomes);
    return (
      <div className="Filters">
        {AllProfs.map((prof, key) => {
          return (
            <button
              key={key}
              className="Filters__button"
              onClick={() => this.handleClick(prof)}
              style={
                this.props.filters[prof]
                  ? { backgroundColor: 'red' }
                  : { backgroundColor: 'white' }
              }
            >
              <img
                className="Filters__button__images"
                src={require(`../../assets/${prof}.svg`)}
                alt={prof}
                key={key}
              />
              {prof}
            </button>
          );
        })}
        <Link to="/">
          <button className="Filter__filter">Filter!</button>
        </Link>
      </div>
    );
  }
}

export default Filters;
