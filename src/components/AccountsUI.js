import React from 'react';
import Accounts from './accounts';
import Account from './account';
import AccountSummary from './AccountSummary';
import AccountCreate from './AccountCreate';
import AccountEdit from './AccountEdit';
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
            currentBalance: "0",
            lowestAccount: "0",
            highestAccount: "0",
            totalAccount: "0",
            addAccount: false,
            editShow: false,
            deleteShow: false,
            accountActionsShow: false
        }
    }

    updateSummary = () => {
        let lowestCheck = this.state.lowestAccount;
        let highestCheck = this.state.highestAccount;
        let totalOfAccounts = 0;
        let currentBalance = 0;
        if (this.state.accountNumber === 1) {
            lowestCheck = this.state.AccountList.Accounts[0].balance;
            highestCheck = this.state.AccountList.Accounts[0].balance;
            totalOfAccounts = this.state.AccountList.Accounts[0].balance;
        }
        else {
            for(let i=0; i<this.state.accountNumber; i++) {
                currentBalance = this.state.AccountList.Accounts[i].balance;
                totalOfAccounts += this.state.AccountList.Accounts[i].balance;
                lowestCheck = (currentBalance < lowestCheck) ? currentBalance : lowestCheck;
                highestCheck = (currentBalance > highestCheck) ? currentBalance : highestCheck;
            }
        }
        this.setState ({lowestAccount: lowestCheck,
                        highestAccount: highestCheck,
                        totalAccount: totalOfAccounts});
    }

    onBtnAddClick = () => {
        const changeState = !this.state.addAccount;
        this.setState ({addAccount: changeState});
    }

    onAccountCreate = (name, balance) => {
        const addthis = new Account(balance, name, this.state.accountNumber);
        const AccountListCopy = new Accounts();
        const changeState = !this.state.addAccount;
        //make a copy of Accountlist to have setState work properly
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        AccountListCopy.addAccount(addthis);
        this.setState({
            AccountList: AccountListCopy,
            accountNumber: this.state.accountNumber + 1,
            addAccount: changeState
        }, () => {
            this.updateSummary();
        });
    }

    onEditClick = (acctIndex) => {
        console.log("in Edit Click", acctIndex);
        console.log("editShow is ", this.state.editShow);
        this.setState({
            editShow: !this.state.editShow,
            currentSelected: acctIndex
        }, () => {
            console.log("this.state.editshow is ", this.state.editShow);
            console.log("this.state.acctindex is ", this.state.currentSelected);
            this.updateSummary();
        });

    }

    onAccountUpdate = (name, balance, index) => {
        console.log("in account update with: ", name, balance, index);
        const updateWithThis = new Account(balance, name, index);
        const AccountListCopy = new Accounts();
        const changeState = !this.state.editShow;

        //make a copy of Accountlist, replacing the edited account
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            if(i == index)
                AccountListCopy.addAccount(updateWithThis);
            else
                AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }

        this.setState({
            AccountList: AccountListCopy,
            editShow: changeState
        }, () => {
            this.updateSummary();
        });
    }

    onDeleteClick = (acctIndex) => {
        console.log("in delete click", acctIndex)
        this.setState({
            deleteShow: true,
            currentSelected: acctIndex
        })
    }

    onAccountClick = (acctIndex) => {
        console.log("in account click", acctIndex);
        this.setState({
            accountActionsShow: true,
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
                        {(this.state.addAccount) ?
                            <AccountCreate props = {this.state} createClicked = {this.onAccountCreate}/>
                            : null }
                        {(this.state.editShow) ?
                            <AccountEdit props = {this.state}
                                         index={this.state.currentSelected}
                                         updateAccount = {this.onAccountUpdate}
                            />
                            :null }

                    </div>

                </div>

            </div>
        )

    }
}
export default AccountsUI