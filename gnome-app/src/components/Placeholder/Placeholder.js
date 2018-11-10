import React, { Component } from 'react';
import loading from '../../assets/Loading_icon.gif';
import './Placeholder.css';

class Placeholder extends Component {
  render() {
    return (
      <div className="Placeholder">
        <img className="Placeholder__image" src={loading} alt="loading..." />
      </div>
    );
  }
}

export default Placeholder;
