import React from 'react';
import '../styles/Styles140.css';
import closebtn from '../images/close_FFFFFF.png';

const AccountActions = (props) => {

    function handleCloseClick() {
        props.closeClicked("actions");
    }


    function handleClick(e) {
        const amount = Number(document.getElementById("amount").value);
        switch (e.target.getAttribute("elem")) {
            case "deposit":
                props.deposit(amount, props.account);
                break;
            case "withdraw":
                props.withdraw(amount, props.account);
                break;
            default:
                //do nothing
        }
    }

    const accountName = props.account.acctName;
    const accountBalance = props.account.balance;
    return(
        <div>
            <div className = "ItemBox AppHeader">
                <span className = "AddItem">{accountName}</span>
                <span className = "AddItem">${accountBalance}</span>
                <button className="AppBtn" onClick={handleCloseClick}>
                    <img className="btnImg" src={closebtn} alt="Close"/>
                </button>
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