import React from 'react';
import '../styles/Accounts.css';

const AccountActions = (props) => {

    function handleClick(e) {
        const amount = Number(document.getElementById("amount").value);
        switch (e.target.getAttribute("elem")) {
            case "deposit":
                props.deposit(amount, props.index);
                break;
            case "withdraw":
                props.withdraw(amount, props.index);
                break;
            default:
                //do nothing
        }
    }

    const accountName = props.AccountList.Accounts[props.index].acctName;
    const accountBalance = props.AccountList.Accounts[props.index].balance;
    return(
        <div>
            <div className = "ItemBox AccountHeader">
                <span className = "AddAccount">{accountName}</span>
                <span className = "AddAccount">${accountBalance}</span>
            </div>
            <div className = "ItemBox" onClick={handleClick}>
                <span className = "DetailText">For Account Name:</span>
                <span className = "DetailText" >{accountName}</span><br/><br/>
                <span className = "DetailText">Amount:</span>
                <input className = "InputText" id = "amount" placeholder="Enter an amount" type="number"></input><br/><br/>
                <button className="btnText" elem="deposit">Deposit</button>
                <button className="btnText" elem="withdraw">Withdraw</button>
            </div>
        </div>
    )
}
export default AccountActions;