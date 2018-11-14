import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Search from '../components/Search';
import { connect } from 'react-redux';
import { searchGnomes } from '../redux/actions';
import { filteredGnomes } from '../redux/selectors';

/**
 * @file gnome-app/src/containers/DashboardContainer.js
 * @class DashboardContainer
 * @extends React.Component
 * @classdesc This is de dashboard container. Structures Dashboard in three main components.
 * @since v1.0
 * @author @rodrifs <rodrifs@gmail.com>
 * <DashboardContainer />
 */
class DashboardContainer extends Component {
  /**
   * @function
   * @name render
   * @memberof DashboardContainer
   * @description Render Navbar, Dashboard and Search components
   * @return {JSX} Components for DashboardContainer
   */
  render() {
    return (
      <div className="DashboardContainer">
        <Navbar />
        <Dashboard gnomes={this.props.filteredgnomes} />
        <Search searchGnomes={searchGnomes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filteredgnomes: filteredGnomes(state)
});

const mapDispatchToProps = {
  searchGnomes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
