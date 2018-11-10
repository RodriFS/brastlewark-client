import React, { Component } from 'react';
import './Navbar.css';
import filter from '../../assets/filter.svg';
import search from '../../assets/search.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <img src={filter} alt="to menu" className="Navbar__toMenu" />
        <div className="Navbar__title">Gnomes</div>
        <img src={search} alt="search" className="Navbar__search" />
      </div>
    );
  }
}

export default Navbar;
