import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfessions } from '../../utils/professions';
import { setFilter } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './Filters.css';

class Filters extends Component {
  handleClick = prof => {
    !this.props.filters[prof]
      ? this.props.setFilter({ [prof]: true })
      : this.props.setFilter({ [prof]: false });
  };

  render() {
    let AllProfs = getProfessions(this.props.gnomes);
    return (
      <div className="Filters">
        {AllProfs.map((prof, key) => {
          return (
            <button
              key={key}
              className="Filters__button"
              onClick={() => this.handleClick(prof)}
              style={
                this.props.filters[prof]
                  ? { backgroundColor: 'red' }
                  : { backgroundColor: 'white' }
              }
            >
              <img
                className="Filters__button__images"
                src={require(`../../assets/${prof}.svg`)}
                alt={prof}
                key={key}
              />
              {prof}
            </button>
          );
        })}
        <Link to="/">
          <button className="Filter__filter">Filter!</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gnomes: state.gnomes,
  filters: state.filters
});

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
