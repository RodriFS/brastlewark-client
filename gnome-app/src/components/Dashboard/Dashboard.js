import React, { Component } from 'react';
import Card from '../../components/Card';
import Placeholder from '../../components/Placeholder';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { filteredGnomes } from '../../redux/selectors';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    //reference to the container div to check for scroll position
    this.divRef = React.createRef();

    //set states for infinite scrolling number;
    this.state = { fetchNumber: 20 };
  }

  fetchMore(ref) {
    // check if the scroll position is more than 80%, if so, add more
    // elements to the array
    if (ref.current.scrollTop / ref.current.scrollHeight > 0.8) {
      let fetchNumber = this.state.fetchNumber + 20;
      this.setState({ fetchNumber });
    }
  }

  render() {
    let gnomes = this.props.gnomes.slice(0, this.state.fetchNumber);
    console.log(this.props.gnomes.length);

    return (
      <div
        className="Dashboard"
        ref={this.divRef}
        onScroll={() => this.fetchMore(this.divRef)}
      >
        {gnomes.length ? (
          gnomes.map(gnome => (
            <LazyLoad
              key={gnome.id}
              height={600}
              overflow={true}
              placeholder={<Placeholder />}
            >
              <Card key={gnome.id} gnome={gnome} />
            </LazyLoad>
          ))
        ) : (
          <div className="Dashboard__empty">Nothing to show!</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gnomes: filteredGnomes(state)
});

export default connect(mapStateToProps)(Dashboard);
