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
            currentBalance: "0",
            lowestAccount: "0",
            highestAccount: "0",
            totalAccount: "0",
            addAccount: "false",
            editShow: "false",
            deleteShow: "false",
            accountActionsShow: "false"
        }
    }

    updateSummary = () => {
        //console.log("changed index is", changedIndex);
        console.log("changed account details", this.state.AccountList);
        let lowestCheck = this.state.lowestAccount;
        let highestCheck = this.state.highestAccount;
        let totalOfAccounts = 0;
        let currentBalance = 0;
        //const newBalance = this.state.AccountList.Accounts[changedIndex].balance;
        if (this.state.accountNumber == 1) {
            lowestCheck = this.state.AccountList.Accounts[0].balance;
            highestCheck = this.state.AccountList.Accounts[0].balance;
            totalOfAccounts = this.state.AccountList.Accounts[0].balance;
        }
        else {
            for(let i=0; i<this.state.accountNumber; i++) {
                console.log("in for loop with i=", i, this.state.AccountList.Accounts[i]);
                console.log("balance is ", this.state.AccountList.Accounts[i].balance);
                currentBalance = this.state.AccountList.Accounts[i].balance;
                totalOfAccounts += this.state.AccountList.Accounts[i].balance;
                console.log("totalOfAccounts is ", totalOfAccounts);
                //var beverage = (age >= 21) ? "Beer" : "Juice";
                lowestCheck = (currentBalance < lowestCheck) ? currentBalance : lowestCheck;
                highestCheck = (currentBalance > highestCheck) ? currentBalance : highestCheck;
            }
        }
        //if (newBalance < lowestCheck) lowestCheck = newBalance;
        //else if (newBalance > highestCheck) highestCheck = newBalance;

        this.setState ({lowestAccount: lowestCheck,
                        highestAccount: highestCheck,
                        totalAccount: totalOfAccounts});

    }

    onBtnAddClick = () => {
        const changeState = !this.state.addAccount;
        this.setState ({addAccount: changeState});
    }
    onAccountCreate = (name, balance) => {
//        console.log("in onAccountCreate");
//        console.log("name and balance are", name, balance);
        const addthis = new Account(balance, name, this.state.accountNumber);
        const index = this.state.accountNumber;
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
        }, () => {
            this.updateSummary();
        });

        //this.updateSummary(index);
        console.log("Account list is ", this.state.AccountList);
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