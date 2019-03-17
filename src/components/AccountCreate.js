import React from 'react';
import addbtn from '../images/add_FFFFFF.png';
import "../styles/Accounts.css";

const AccountCreate = (props) => {

    console.log("props is ",props);
    console.log("highest account is ", props.highestAccount);
    console.log("highest account 2 is ", props.props.highestAccount);



    function handleAddClick() {
        console.log("in handleAddClick function");
        const name = document.getElementById("acctName").value;
        const balance = Number(document.getElementById("acctBalance").value);
        props.createClicked(name, balance)
    }

    return(
        <div>
            <div className = "ItemBox AccountHeader">
                <span className= "AddAccount">Add Account</span>
                <button className="AccountBtn "><img className="btnImg" src={addbtn} alt="Add"/></button>
            </div>
            <div className = "ItemBox">
                <span className = "DetailText">Account Name:</span>
                <input className="InputText" id="acctName"></input><br/>
                <span className = "DetailText">Start Balance:</span>
                <input className = "InputText" id="acctBalance" type="number"></input><br/><br/>
                <button className="btnText" onClick={handleAddClick}>Create Account</button>

            </div>
        </div>
    )
}
export default AccountCreate