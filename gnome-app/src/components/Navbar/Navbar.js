import React, { Component } from 'react';
import './Navbar.css';
import filter from '../../assets/filter.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/filters">
          <img src={filter} alt="to filter" className="Navbar__toFilter" />
        </Link>
        <div className="Navbar__title">Welcome to Brastlewark</div>
      </div>
    );
  }
}

export default Navbar;
