import React, { Component } from 'react';
import DashboardContainer from './containers/DashboardContainer';
import FiltersContainer from './containers/FiltersContainer';
import { connect } from 'react-redux';
import { getGnomes } from './redux/actions';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

/**
 * @file gnome-app/src/App.js
 * @class App
 * @extends React.Component
 * @classdesc This is the main app component. Api call and Routes are defined here
 * @since v1.0
 * @author @rodrifs <rodrifs@gmail.com>
 * <App />
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.base_url =
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

    //gets gnomes when the page loads
    this.getGnomesFromApi();
  }

  /**
   * @function
   * @name getGnomesFromApi
   * @memberof App
   * @description calls api
   * @return {OBJECT} Object that contains all gnomes
   */
  getGnomesFromApi() {
    fetch(this.base_url)
      .then(res => res.json())
      .then(this.props.getGnomes);
  }

  /**
   * @function
   * @name render
   * @memberof App
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DashboardContainer} />
        <Route path="/filters" component={FiltersContainer} />
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
  gnomes: state.gnomes
});

const mapDispatchToProps = {
  getGnomes
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
