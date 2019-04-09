import React from 'react';
import closebtn from '../images/close_FFFFFF.png';
import "../styles/Styles140.css";

const AccountCreate = (props) => {

    function handleCloseClick() {
        props.closeClicked("create");
    }

    function handleAddClick() {
//        console.log("in handleAddClick function");
        const name = document.getElementById("acctName").value;
        const balance = Number(document.getElementById("acctBalance").value);
        props.createClicked(name, balance)
    }

    return(
        <div>
            <div className = "ItemBox AppHeader">
                <span className= "AddItem">Add Account</span>
                <button className="AppBtn" onClick={handleCloseClick}>
                    <img className="btnImg" src={closebtn} alt="Close"/>
                </button>
            </div>
            <div className = "ItemBox">
                <span className = "DetailText">Account Name:</span>
                <input className="InputText" id="acctName" autoFocus={true}></input><br/>
                <span className = "DetailText">Start Balance:</span>
                <input className = "InputText" id="acctBalance" type="number"></input><br/><br/>
                <button className="btnText" onClick={handleAddClick}>Create Account</button>

            </div>
        </div>
    )
}
export default AccountCreate