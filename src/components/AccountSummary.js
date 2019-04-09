import React from "react";
import '../styles/Accounts.css';

class AccountSummary extends React.Component {
  constructor(props) {
      super(props);
      this.state = this.computeAggregates(props.accounts);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState(this.computeAggregates(nextProps.accounts));
  }

  computeAggregates(accounts) {
    let min = Infinity;
    let max = 0;
    let total = 0;
    accounts.forEach(account => {
        min = Math.min(account.getbalance(), min);
        max = Math.max(account.getbalance(), max);
        total += account.getbalance();
    });
    return {
      lowest: accounts.length > 0 ? min : 0,
      highest: max,
      total: total
    };
  }

  render() {
    return (
      <div className="SummaryText">
        <h2>Accounts Summary</h2>
        <span>Lowest Account: </span>
        <span>${this.state.lowest}</span><br/>
        <span>Highest Account: </span>
        <span>${this.state.highest}</span><br/>
        <span>Total Balance:</span>
        <span>${this.state.total}</span><br/>
        <br/>
      </div>
    )
  }
}
export default AccountSummary