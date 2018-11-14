import React, { Component } from 'react';
import Card from '../../components/Card';
import Placeholder from '../../components/Placeholder';
import LazyLoad from 'react-lazyload';
import './Dashboard.css';

/**
 * @file gnome-app/src/components/Dashboard.js
 * @class Dashboard
 * @extends React.Component
 * @classdesc This is de Dashboard component. Maps and renders all Card components.
 * @since v1.0
 * @author @rodrifs <rodrifs@gmail.com>
 * <Dashboard />
 */
class Dashboard extends Component {
  constructor(props) {
    super(props);

    //reference to the container div to check for scroll position
    this.divRef = React.createRef();

    //set states for infinite scrolling number;
    this.state = { fetchNumber: 20 };
  }

  /**
   * @function
   * @name fetchMore
   * @memberof Dashboard
   * @description Check if the scroll position is more than 80%, if so, add more elements to the array
   * @return {Void}
   */
  fetchMore(ref) {
    if (ref.current.scrollTop / ref.current.scrollHeight > 0.8) {
      let fetchNumber = this.state.fetchNumber + 20;
      this.setState({ fetchNumber });
    }
  }

  /**
   * @function
   * @name render
   * @memberof Dashboard
   * @description Renders Card components
   * @return {JSX} Components for Dashboard
   */
  render() {
    // show only a fraction of the gnomes
    let gnomes = this.props.gnomes.slice(0, this.state.fetchNumber);

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
export default Dashboard;
