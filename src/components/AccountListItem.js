import React from 'react';
import '../styles/Accounts.css';
import editbtn from '../images/edit_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';

const AccountListItem = (props) => {

    function handleAccountClick(e) {
        console.log("in handleclick function generic");
        console.log("account index is ", e.target.parentNode.getAttribute("idindex"));
        console.log("account index 2 is", e.target.parentNode.getAttribute("idindex"));
        console.log("classname is ", e.target.parentNode.getAttribute("className"));
        const acctIndex = e.target.getAttribute("idindex");
        if(e.target.parentNode.getAttribute("className") === "AccountBtn Add")
            console.log("add was clicked");
        else if (e.target.parentNode.getAttribute("className") === "AccountBtn Delete")
            console.log("delete was clicked");
        else {
            //props.accountClicked(acctIndex);
            console.log("account item was clicked");
        }
    }
    function handleEditClick(e) {
        console.log("in handleEditClick of AccountListItem");
        console.log("event is", e);
        console.log("event target is", e.target);
        console.log("event target parent is ", e.target.parentNode)
        console.log("event target parent parent is ", e.target.parentNode.parentNode);
        console.log("index is ", e.target.parentNode.parentNode.getAttribute("idindex"));
        console.log("props is ", props);
        const acctIndex = e.target.parentNode.parentNode.getAttribute("idindex");
        props.editClicked(acctIndex);
        //props.onEditClick(acctIndex);
        //editClicked(acctIndex);
    }

    function handleDeleteClick(e) {
        console.log("in deleteclick");
        const acctIndex = e.target.parentNode.getAttribute("idindex");
        //props.deleteClicked(acctIndex);
        //props.onDeleteClick(acctIndex)
    }



    return (
        <div className="ItemBox AccountListItem" idindex={props.item.acctId}
             onClick={handleAccountClick}>
            <span className="DetailText">{props.item.acctName + " $" + props.item.balance}</span>
            <button className="AccountBtn Add" onClick={handleEditClick}>
                <img className="btnImg" src={editbtn} alt="Add"/>
            </button>
            <button className="AccountBtn Delete" onClick={handleDeleteClick}>
                <img className="btnImg" src={deletebtn} alt="Add"/>
            </button>
            <hr/>
        </div>

    )
}

export default AccountListItem;