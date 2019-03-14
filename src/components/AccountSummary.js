import React from "react";
import '../styles/Accounts.css';

const AccountSummary = (props) => {

    console.log("lowest account is ", props.lowestAccount);
    console.log("props is ",props);
    console.log("highest account is ", props.highestAccount);
    console.log("highest account 2 is ", props.props.highestAccount);

    return(
        <div className = "SummaryText">
            <h2>Accounts Summary</h2>

            <span>Lowest Account: </span>
            <span>${props.props.lowestAccount}</span><br/>
            <span>Highest Account: </span>
            <span>${props.props.highestAccount}</span><br/>
            <span>Total Balance:</span>
            <span>${props.props.totalAccount}</span><br/>
            <br/>
        </div>
    )
}
export default AccountSummary