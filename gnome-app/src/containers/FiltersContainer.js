import React, { Component } from 'react';
import Filters from '../components/Filters';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

/**
 * @file gnome-app/src/containers/FiltersContainer.js
 * @class FiltersContainer
 * @extends React.Component
 * @classdesc This is de filters container. Manages redux state.
 * @since v1.0
 * @author @rodrifs <rodrifs@gmail.com>
 * <FiltersContainer />
 */
class FiltersContainer extends Component {
  /**
   * @function
   * @name render
   * @memberof FiltersContainer
   * @description Render Filters component
   * @return {JSX} Components for FiltersContainer
   */
  render() {
    return (
      <div className="FiltersContainer">
        <Filters
          gnomes={this.props.gnomes}
          filters={this.props.filters}
          setFilter={this.props.setFilter}
        />
      </div>
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof App
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = state => ({
  gnomes: state.gnomes,
  filters: state.filters
});

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
