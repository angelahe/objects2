import React from 'react';
import '../styles/Styles140.css';
import './community';

class CommunitySummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.computeAggregates(props.communities);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState(this.computeAggregates(nextProps.communities));
  }

  computeAggregates(communities) {
    let mostNorthern = "";
    let mostSouthern = "";
    let totalPopulation = 0;

    mostNorthern = communities.getMostNorthern();
    mostSouthern = communities.getMostSouthern();
    totalPopulation = communities.getPopulation();

    return {
      mostNorthern : mostNorthern,
      mostSouthern : mostSouthern,
      totalPopulation : totalPopulation
    };
  }

  render() {
    return (
      <div className="SummaryText">
        <h2>Community Summary</h2>
        <span>Most Northern: </span>
        <span>{this.state.mostNorthern}</span><br/>
        <span>Most Southern: </span>
        <span>{this.state.mostSouthern}</span><br/>
        <span>Total Population:</span>
        <span>{this.state.totalPopulation}</span><br/>
        <br/>
      </div>
    )
  }
}
export default CommunitySummary