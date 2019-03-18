import React from 'react';
import '../styles/Accounts.css';
import editbtn from '../images/edit_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';

const AccountListItem = (props) => {

    function handleAccountClick(e) {
        console.log("in handleclick function AccountList");

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