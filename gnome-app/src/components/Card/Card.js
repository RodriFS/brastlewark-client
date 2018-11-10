import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div
        className="Card__holder"
        style={{ backgroundImage: 'url(' + this.props.thumbnail + ')' }}
      >
        <div className="Card__holder__name">{this.props.name}</div>
      </div>
    );
  }
}

export default Card;
