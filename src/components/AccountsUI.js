import React from 'react';
import Accounts from './accounts';
import Account from './account';
import AccountSummary from './AccountSummary';
import AccountCreate from './AccountCreate';
import AccountEdit from './AccountEdit';
import AccountDelete from './AccountDelete';
import AccountListItem from './AccountListItem';
import AccountActions from './AccountActions';
import addbtn from '../images/add_FFFFFF.png';

import '../styles/Accounts.css';


class AccountsUI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            AccountList: new Accounts(),
            accountNumber: 0,
            nextId: 0,
            currentSelected: 0,
            currentAccount: "Savings",
            currentBalance: 0,
            lowestAccount: 0,
            highestAccount: 0,
            totalAccount: 0,
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
        if (this.state.accountNumber === 0) {
            lowestCheck = 0;
            highestCheck = 0;
            totalOfAccounts = 0;
        }
        else if (this.state.accountNumber === 1) {
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
        const addthis = new Account(balance, name, this.state.nextId);
        const AccountListCopy = new Accounts();
        const changeState = !this.state.addAccount;
        const nextId = this.state.nextId;
        console.log("nextid is ", nextId);
        //make a copy of Accountlist to have setState work properly
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        AccountListCopy.addAccount(addthis);
        console.log("in onAccountCreate length of array is ", AccountListCopy.Accounts.length);
        this.setState({
            AccountList: AccountListCopy,
            accountNumber: AccountListCopy.Accounts.length,
            addAccount: changeState,
            nextId: nextId + 1
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
            if(i === index)
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
        console.log("in delete click", acctIndex);
        this.setState({
            deleteShow: true,
            currentSelected: acctIndex
        }, () => {
            this.updateSummary();
        });
    }

    onDeleteAccount = (acctIndex) => {
        console.log("in delete account", acctIndex);
        const AccountListCopy = new Accounts();

        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            if (i!== acctIndex)
                AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        this.setState({
            AccountList: AccountListCopy,
            deleteShow: false,
            accountNumber: AccountListCopy.Accounts.length,
            currentSelected: 0
        }, () => {
            this.updateSummary();
        });
    }

    onAccountClick = (acctIndex) => {
        console.log("in account click", acctIndex);
        this.setState({
            accountActionsShow: true,
            currentSelected: acctIndex
        })
    }

    onDepositToAccount = (amount, acctIndex) => {
        console.log("in onDepositToAccount");
        const AccountListCopy = new Accounts();
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        AccountListCopy.depositToAccount(acctIndex, amount);
        this.setState({
            AccountList: AccountListCopy,
            accountActionsShow: false,
        }, () => {
           this.updateSummary();
        });
    }

    onWithdrawFromAccount = (amount, acctIndex) => {
        console.log("in onWithdrawFromAccount for of ", amount, acctIndex);
        const AccountListCopy = new Accounts();
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            if (i!== acctIndex)
                AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        AccountListCopy.withdrawFromAccount(acctIndex, amount);
        this.setState({
            AccountList: AccountListCopy,
            accountActionsShow: false
        }, () => {
            this.updateSummary();
        });
    }

    render() {

//        console.log("Account list items are ", this.state.AccountList);
        console.log("addAccount is ", this.state.addAccount);
        const accountListItems = this.state.AccountList.Accounts.map((item, index) =>
           <AccountListItem key={item.acctId}
                            index = {index}
                            item={item}
                            accountClicked={this.onAccountClick}
                            editClicked={this.onEditClick}
                            deleteClicked={this.onDeleteClick}
           />
        );

        return(
            <div>
                <h1>Hello world from Accounts</h1>
                <div className = "AccountContainer">
                    <AccountSummary {...this.state}/>
                    <div className = "AccountPanel">
                          <div className = "ItemBox AccountHeader">
                            <span className = "AddAccount">Add Account</span>
                            <button className="AccountBtn" onClick={this.onBtnAddClick}>
                                <img className="btnImg" src={addbtn} alt="Add"/>
            `                    </button>
                          </div>
                        <div className = "AccountList">
                            {accountListItems}
                        </div>
                    </div>
                    <div className = "AccountPanel">
                        {(this.state.addAccount)
                            ? <AccountCreate {...this.state}
                                             createClicked = {this.onAccountCreate}
                              />
                            : null }
                        {(this.state.editShow)
                            ? <AccountEdit {...this.state}
                                         index= {this.state.currentSelected}
                                         updateAccount = {this.onAccountUpdate}
                              />
                            :null }
                        {(this.state.deleteShow)
                            ? <AccountDelete {...this.state}
                                           index = {this.state.currentSelected}
                                           deleteAccount = {this.onDeleteAccount}
                              />
                            :null }
                        {(this.state.accountActionsShow)
                            ? <AccountActions {...this.state}
                                              index={this.state.currentSelected}
                                              deposit={this.onDepositToAccount}
                                              withdraw={this.onWithdrawFromAccount}
                            />
                            : null
                        }
                    </div>

                </div>

            </div>
        )

    }
}
export default AccountsUI