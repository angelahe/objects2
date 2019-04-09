import React from 'react';
import '../styles/Styles140.css'
import editbtn from '../images/edit_FFFFFF.png'

const AccountEdit = (props) => {

//    console.log("in accountedit props is", props);
//    console.log("selected account is ", props.index);
//    console.log("account name is ", props.AccountList.Accounts[props.index].acctName);

    function handleUpdateClick() {
        const newName = document.getElementById("acctName").value;
        const newBalance = Number(document.getElementById("acctBalance").value);
        props.updateAccount(newName, newBalance, props.account);
    }

    const accountName = props.account.acctName;
    const accountBalance = props.account.balance;

    return(
        <div>
            <div className = "ItemBox AppHeader">
                <span className = "AddItem">Edit Account</span>
                <button className="AppBtn "><img className="btnImg" src={editbtn} alt="Add"/></button>
            </div>
            <div className = "ItemBox">
                <span className = "DetailText">Account Name:</span>
                <input className="InputText" id="acctName" defaultValue={accountName} autoFocus={true}></input><br/>
                <span className = "DetailText">Balance:</span>
                <input className = "InputText" id = "acctBalance" type="number" defaultValue={accountBalance}></input><br/><br/>
                <button className="btnText" onClick={handleUpdateClick}>Update Account</button>

            </div>
        </div>
    )

}
export default AccountEdit;