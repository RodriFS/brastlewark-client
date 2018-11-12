import React, { Component } from 'react';
import search from '../../assets/search.svg';
import './Search.css';
import { connect } from 'react-redux';
import { searchGnomes } from '../../redux/actions';

class Search extends Component {
  handleChange = event => {
    this.props.searchGnomes(event.target.value);
  };

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          name="search"
          value={this.props.search}
          placeholder="Find a gnome..."
          onChange={this.handleChange}
        />
        <span
          className="Search__container__clear"
          onClick={() => this.props.searchGnomes('')}
        >
          X
        </span>
        <div className="Search__container">
          <img src={search} alt="search" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = {
  searchGnomes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
