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
                props.editClicked(acctIndex);
                break;
            case "Delete":
                acctIndex = e.target.parentNode.getAttribute("idindex");
                props.deleteClicked(acctIndex);
                break;
            case "Edit Image":
                acctIndex = e.target.parentNode.parentNode.getAttribute("idindex");
                props.editClicked(acctIndex);
                break;
            case "Delete Image":
                acctIndex = e.target.parentNode.parentNode.getAttribute("idindex");
                props.deleteClicked(acctIndex);
                break;
            case "Container":
                acctIndex = e.target.getAttribute("idindex");
                props.accountClicked(acctIndex);
                break;
            case "Text":
                acctIndex = e.target.parentNode.getAttribute("idindex");
                props.accountClicked(acctIndex);
                break;
            default:
                console.log("unknown element was clicked");
        }
    }
//fixing index from key to actual index idindex={props.item.acctId} to props.index

    return (
        <div className="ItemBox AccountListItem" elemtype = "Container" idindex={props.index}
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