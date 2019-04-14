import React from 'react';
import '../styles/Styles140.css';
import editbtn from '../images/edit_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';

const AccountListItem = (props) => {

    function handleAccountClick(e) {

        switch (e.target.getAttribute("elemtype")) {
            case "Edit":
                props.editClicked(props.account);
                break;
            case "Delete":
                props.deleteClicked(props.account);
                break;
            case "Edit Image":
                props.editClicked(props.account);
                break;
            case "Delete Image":
                props.deleteClicked(props.account);
                break;
            case "Container":
                props.accountClicked(props.account);
                break;
            case "Text":
                props.accountClicked(props.account);
                break;
            default:
                console.log("unknown element was clicked");
        }
    }
//fixing index from key to actual index idindex={props.item.acctId} to props.index

    return (
        <div className="ItemBox AppListItem" elemtype = "Container" idindex={props.index}
             onClick={handleAccountClick}>
            <span className="DetailText" elemtype = "Text">{props.account.acctName + " $" + props.account.balance}</span>
            <button className="AppBtn" elemtype = "Edit">
                <img className="btnImg" elemtype = "Edit Image" src={editbtn} alt="Add"/>
            </button>
            <button className="AppBtn Delete" elemtype = "Delete">
                <img className="btnImg" elemtype = "Delete Image" src={deletebtn} alt="Add"/>
            </button>
            <hr/>
        </div>

    )
}

export default AccountListItem;