import React from 'react';
import '../styles/Accounts.css'
import deletebtn from '../images/delete_FFFFFF.png';

const AccountDelete = (props) => {

    console.log("in accountedit props is", props);
    console.log("selected account is ", props.index);
    console.log("account name is ", props.props.AccountList.Accounts[props.index].acctName);

    function handleDeleteClick() {
        console.log("in handleUpdateClick");
        props.deleteAccount(Number(props.index));
    }

    const accountName = props.props.AccountList.Accounts[props.index].acctName;
    const accountBalance = props.props.AccountList.Accounts[props.index].balance;

    return(
        <div>
            <div className = "ItemBox AccountHeader">
                <span className = "AddAccount">Delete Account</span>
                <button className="AccountBtn "><img className="btnImg" src={deletebtn} alt="Add"/></button>
            </div>
            <div className = "ItemBox">
                <span className = "DetailText">Account Name:</span>
                <span className = "DetailText">{accountName}</span><br/>
                <span className = "DetailText">Balance: $</span>
                <span className = "DetailText">{accountBalance}</span><br/>
                <button className="btnText" onClick={handleDeleteClick}>Confirm Delete Account</button>
            </div>
        </div>
    )

}
export default AccountDelete;