import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGnomes } from '../../redux/actions';
import './Card.css';

class Card extends Component {
  render() {
    const {
      name,
      age,
      thumbnail,
      weight,
      height,
      hair_color,
      professions,
      friends
    } = this.props.gnome;

    return (
      <div className="Card">
        <div className="Card__imgholder">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="Card__holder">
          <div className="Card__holder__name">{name}</div>
          <div className="Card__holder__age">Age: {age}</div>
          <div className="Card__holder__weight">
            Weight: {weight.toFixed(1)} Kg
          </div>
          <div className="Card__holder__height">
            Height: {(height / 100).toFixed(2)} m
          </div>
          <div className="Card__holder__hair">
            <div className="Card__holder__hair__text">Hair color: </div>
            <div
              className="Card__holder__hair__color"
              style={{
                backgroundColor: hair_color
              }}
            />
          </div>
          <div className="Card__holder__break" />
          <div className="Card__holder__icons">
            {professions.map((prof, key) => {
              return (
                <img
                  src={require(`../../assets/${prof}.svg`)}
                  alt={prof}
                  key={key}
                />
              );
            })}
          </div>
          {friends.length ? (
            <div className="Card__holder__friends">
              Friends:{' '}
              {friends.map((friend, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => this.props.searchGnomes(friend)}
                  >
                    {index ? ', ' : ''}
                    {friend}
                  </span>
                );
              })}
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchGnomes
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
