import React from "react";
import '../styles/Styles140.css';

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
    min = accounts.getMinAccount();
    max = accounts.getMaxAccount();
    total = accounts.getAccountTotal();

    return {
      lowest: min,
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