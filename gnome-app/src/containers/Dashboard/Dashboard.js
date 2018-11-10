import React, { Component } from 'react';
import Card from '../../components/Card';
import Placeholder from '../../components/Placeholder';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    //reference to the container div to check for scroll position
    this.divRef = React.createRef();

    //set states for array of gnomes and infinite scrolling number;
    this.state = { gnomes: false, fetchNumber: 40 };
  }

  componentDidUpdate() {
    //check if props arrived yet
    if (this.state.gnomes === false) {
      this.setState({ gnomes: this.props.gnomes.slice(0, 20) });
    }
  }

  fetchMore(ref) {
    // check if the scroll position is more than 80%, if so, add more
    // elements to the array
    if (ref.current.scrollTop / ref.current.scrollHeight > 0.8) {
      this.setState({
        gnomes: this.props.gnomes.slice(0, this.state.fetchNumber)
      });
      let fetchNumber = this.state.fetchNumber + 20;
      this.setState({ fetchNumber });
    }
  }

  render() {
    return (
      <div
        className="Dashboard"
        ref={this.divRef}
        onScroll={() => this.fetchMore(this.divRef)}
      >
        {this.state.gnomes ? (
          this.state.gnomes.map(gnome => (
            <LazyLoad
              key={gnome.id}
              height={600}
              overflow={true}
              placeholder={<Placeholder />}
            >
              <Card
                key={gnome.id}
                name={gnome.name}
                thumbnail={gnome.thumbnail}
              />
            </LazyLoad>
          ))
        ) : (
          <div>Nothing to show</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gnomes: state.gnomes
});

export default connect(mapStateToProps)(Dashboard);
