import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Search from '../components/Search';

class DashboardContainer extends Component {
  render() {
    return (
      <div className="DashboardContainer">
        <Navbar />
        <Dashboard />
        <Search />
      </div>
    );
  }
}

export default DashboardContainer;
