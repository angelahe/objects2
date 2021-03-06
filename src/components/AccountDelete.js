import React from 'react';
import '../styles/Styles140.css'
import closebtn from '../images/close_FFFFFF.png';

const AccountDelete = (props) => {

  function handleCloseClick() {
    props.closeClicked("delete");
  }

  function handleDeleteClick() {
        console.log("in handleUpdateClick");
        props.deleteAccount(props.account);
    }

    const accountName = props.account.acctName;
    const accountBalance = props.account.balance;

    return(
        <div>
            <div className = "ItemBox AppHeader">
                <span className = "AddItem">Delete Account</span>
              <button className="AppBtn" onClick={handleCloseClick}>
                <img className="btnImg" src={closebtn} alt="Close"/>
              </button>
            </div>
            <div className = "ItemBox">
                <span className = "DetailText">Account Name:</span>
                <span className = "DetailText">{accountName}</span><br/>
                <span className = "DetailText">Balance: $</span>
                <span className = "DetailText">{accountBalance}</span><br/>
                <button className="btnText" onClick={handleDeleteClick}>Delete Account</button>
            </div>
        </div>
    )

}
export default AccountDelete;