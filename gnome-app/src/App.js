import React, { Component } from 'react';
import DashboardContainer from './containers/DashboardContainer';
import { connect } from 'react-redux';
import { getGnomes } from './redux/actions';
import { Route, withRouter } from 'react-router-dom';
import Filters from './components/Filters';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.base_url =
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

    //gets gnomes when the page loads
    this.getGnomesFromApi();
  }

  getGnomesFromApi() {
    fetch(this.base_url)
      .then(res => res.json())
      .then(this.props.getGnomes);
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DashboardContainer} />
        <Route path="/filters" component={Filters} />
      </div>
    );
  }
}

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
