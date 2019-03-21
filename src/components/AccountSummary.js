import React from "react";
import '../styles/Accounts.css';

const AccountSummary = (props) => {

    return(
        <div className = "SummaryText">
            <h2>Accounts Summary</h2>
            <span>Lowest Account: </span>
            <span>${props.lowestAccount}</span><br/>
            <span>Highest Account: </span>
            <span>${props.highestAccount}</span><br/>
            <span>Total Balance:</span>
            <span>${props.totalAccount}</span><br/>
            <br/>
        </div>
    )
}
export default AccountSummary