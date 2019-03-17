import React from 'react';
import '../styles/Accounts.css';
import editbtn from '../images/edit_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';

const AccountListItem = (props) => {

    function handleAccountClick(e) {
        console.log("in handleclick function AccountList");
        //console.log("account index is ", e.target.parentNode.getAttribute("idindex"));
        //console.log("account index 2 is", e.target.parentNode.getAttribute("idindex"));
        //console.log("classname is ", e.target.parentNode.getAttribute("className"));
        //const acctIndex = e.target.getAttribute("idindex");
        //if(e.target.parentNode.getAttribute("className") === "AccountBtn Add")
        //    console.log("add was clicked");
        //else if (e.target.parentNode.getAttribute("className") === "AccountBtn Delete")
        //    console.log("delete was clicked");
        //else {
            //props.accountClicked(acctIndex);
        //    console.log("account item was clicked");
        //}

        let acctIndex = NaN;

        switch (e.target.getAttribute("elemtype")) {
            case "Edit":
                acctIndex = e.target.parentNode.getAttribute("idindex");
                console.log("edit button was clicked index is ", acctIndex);
                props.editClicked(acctIndex);
                break;
            case "Delete":
                acctIndex = e.target.parentNode.getAttribute("idindex");
                console.log("delete button was clicked index is ", acctIndex);
                props.deleteClicked(acctIndex);
                break;
            case "Edit Image":
                acctIndex = e.target.parentNode.parentNode.getAttribute("idindex");
                console.log("edit image was clicked index is ", acctIndex);
                props.editClicked(acctIndex);
                break;
            case "Delete Image":
                acctIndex = e.target.parentNode.parentNode.getAttribute("idindex");
                console.log("delete image was clicked index is ", acctIndex);
                props.deleteClicked(acctIndex);
                break;
            case "Container":
                acctIndex = e.target.getAttribute("idindex");
                console.log("container was clicked index is ", acctIndex);
                props.accountClicked(acctIndex);
                break;
            case "Text":
                acctIndex = e.target.parentNode.getAttribute("idindex");
                console.log("detail text was clicked index is ", acctIndex);
                props.accountClicked(acctIndex);
                break;
            default:
                console.log("unknown element was clicked");
        }
    }

//    function handleEditClick(e) {
//        console.log("in handleEditClick of AccountListItem");
//        console.log("event is", e);
//        console.log("event target is", e.target);
//        console.log("event target parent is ", e.target.parentNode)
//        console.log("event target parent parent is ", e.target.parentNode.parentNode);
//        console.log("index is ", e.target.parentNode.parentNode.getAttribute("idindex"));
//        console.log("props is ", props);
//        const acctIndex = e.target.parentNode.parentNode.getAttribute("idindex");
//        props.editClicked(acctIndex);
        //props.onEditClick(acctIndex);
        //editClicked(acctIndex);
//    }

//    function handleDeleteClick(e) {
//        console.log("in deleteclick");
//        const acctIndex = e.target.parentNode.getAttribute("idindex");
        //props.deleteClicked(acctIndex);
        //props.onDeleteClick(acctIndex)
//    }



    return (
        <div className="ItemBox AccountListItem" elemtype = "Container" idindex={props.item.acctId}
             onClick={handleAccountClick}>
            <span className="DetailText" elemtype = "Text">{props.item.acctName + " $" + props.item.balance}</span>
            <button className="AccountBtn" elemtype = "Edit">
                <img className="btnImg" elemtype = "Edit Image" src={editbtn} alt="Add"/>
            </button>
            <button className="AccountBtn Delete" elemtype = "Delete">
                <img className="btnImg" elemtype = "Delete Image" src={deletebtn} alt="Add"/>
            </button>
            <hr/>
        </div>

    )
}

export default AccountListItem;