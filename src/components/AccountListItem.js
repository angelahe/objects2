import React from 'react';
import '../styles/Accounts.css';
import editbtn from '../images/edit_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';

const AccountListItem = (props) => {

    return (
        <div className="ItemBox AccountListItem">
            <span className="DetailText">{props.item.acctName + " $" + props.item.balance}</span>
            <button className="AccountBtn"><img className="btnImg" src={editbtn} alt="Add"/></button>
            <button className="AccountBtn"><img className="btnImg" src={deletebtn} alt="Add"/></button>
            <hr/>
        </div>

    )
}

export default AccountListItem;