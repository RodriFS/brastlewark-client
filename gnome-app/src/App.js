import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';
import { connect } from 'react-redux';
import { getGnomes } from './redux/actions';
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
        <Navbar />
        <Dashboard />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
