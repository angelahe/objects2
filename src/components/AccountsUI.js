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

    onBtnAddClick = () => {
        const changeState = !this.state.addAccount;
        this.setState ({addAccount: changeState});
    }

    //make a copy of the current AccountList in state
    makeAccountCopy = () => {
        const AccountListCopy = new Accounts();
        for(let i=0; i<this.state.AccountList.Accounts.length; i++) {
            AccountListCopy.addAccount(this.state.AccountList.Accounts[i]);
        }
        return AccountListCopy;

    }

    onAccountCreate = (name, balance) => {
        const AccountListCopy = this.makeAccountCopy();
        AccountListCopy.addAccount(new Account(balance, name, this.state.nextId));

        this.setState({
            AccountList: AccountListCopy,
            accountNumber: AccountListCopy.Accounts.length,
            addAccount: !this.state.addAccount,
            nextId: this.state.nextId + 1
        });
    }

    onEditClick = (acctIndex) => {
        this.setState({
            editShow: !this.state.editShow,
            currentSelected: acctIndex
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
        });
    }

    onDeleteClick = (acctIndex) => {
        console.log("in delete click", acctIndex);
        this.setState({
            deleteShow: true,
            currentSelected: acctIndex
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
//<AccountSummary accounts={this.state.AccountList.Accounts} />

        return(
            <div>
                <h1>Hello from Accounts</h1>
                <div className = "AccountContainer">
                    <AccountSummary accounts={this.state.AccountList} />
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