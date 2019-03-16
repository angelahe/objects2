import React from 'react';
import Accounts from './accounts';
import Account from './account';
import AccountSummary from './AccountSummary';
import AccountCreate from './AccountCreate';
import AccountListItem from './AccountListItem';
import addbtn from '../images/add_FFFFFF.png';

import '../styles/Accounts.css';


class AccountsUI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            AccountList: new Accounts(),
            accountNumber: 0,
            currentSelected: 0,
            currentAccount: "Savings",
            currentBalance: "25",
            lowestAccount: "10",
            highestAccount: "50",
            totalAccount: "100",
            addAccount: "false",
            editShow: "false",
            deleteShow: "false",
            accountActionsShow: "false"
        }
    }

    onBtnAddClick = () => {
        const changeState = !this.state.addAccount;
        this.setState ({addAccount: changeState});
    }
    onAccountCreate = (name, balance) => {
//        console.log("in onAccountCreate");
//        console.log("name and balance are", name, balance);
        const addthis = new Account(balance, name, this.state.accountNumber);
//        console.log("add this is ", addthis);
        const AccountListCopy = new Accounts();
        const changeState = !this.state.addAccount;
        //make a copy of Accountlist to have setState work properly
//        console.log("len of AccountList array ", this.state.AccountList);
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
//            console.log("adding account item ", i, this.state.AccountList.Accounts[i]);

            AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        AccountListCopy.addAccount(addthis);

        this.setState({
            AccountList: AccountListCopy,
            accountNumber: this.state.accountNumber + 1,
            addAccount: changeState
        })
//        console.log("Account list is ", this.state.AccountList);
    }

    onEditClick = (acctIndex) => {
        console.log("in Edit Click", acctIndex)

        this.setState({
            editShow: "true",
            currentSelected: acctIndex
        })

    }

    onDeleteClick = (acctIndex) => {
        console.log("in delete click", acctIndex)
        this.setState({
            deleteShow: "true",
            currentSelected: acctIndex
        })
    }

    onAccountClick = (acctIndex) => {
        console.log("in account click", acctIndex);
        this.setState({
            accountActionsShow: "true",
            currentSelected: acctIndex
        })
    }

    render() {

//        console.log("Account list items are ", this.state.AccountList);
        console.log("addAccount is ", this.state.addAccount);
        const accountListItems = this.state.AccountList.Accounts.map(item =>
           <AccountListItem key={item.acctId}
                            item={item}
                            accountClicked={this.onAccountClick}
                            editClicked={this.onEditClick}
                            deleteClicked={this.onDeleteClick}
           />
        );
//        console.log("Render again, these accounts ", this.state.AccountList);
        return(
            <div>
                <h1>Hello world from Accounts</h1>
                <div className = "AccountContainer">
                    <AccountSummary props = {this.state}/>
                    <div className = "AccountPanel">
                          <div className = "ItemBox AccountHeader">
                            <span className = "AddAccount">Add Account</span>
                            <button className="AccountBtn" onClick={this.onBtnAddClick}>
                                <img className="btnImg" src={addbtn} alt="Add"/>
                            </button>
                          </div>
                        <div className = "AccountList">
                            {accountListItems}
                        </div>
                    </div>
                    <div className = "AccountPanel">
                        {(!this.state.addAccount) ?
                            <AccountCreate props = {this.state} createClicked = {this.onAccountCreate}/>
                            : null }
                    </div>

                </div>

            </div>
        )

    }
}
export default AccountsUI