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

import '../styles/Styles140.css';


class AccountsUI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            AccountList: new Accounts(),
            nextId: 0,
            currentAccount: null,
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
            addAccount: !this.state.addAccount,
            nextId: this.state.nextId + 1
        });
    }

    onEditClick = (account) => {
        this.setState({
            editShow: !this.state.editShow,
            currentAccount: account
        });

    }

    //only update state if the accountupdate was successful
    onAccountUpdate = (newName, newBalance, account) => {
        this.state.AccountList.updateAccount(newName, newBalance, account)

        this.setState({
                AccountList: this.state.AccountList,
                editShow: !this.state.editShow
            });

    }

    onDeleteClick = (account) => {
        this.setState({
            deleteShow: true,
            currentAccount: account
        });
    }

    onDeleteAccount = (account) => {
        this.state.AccountList.deleteAccount(account);

        this.setState({
            AccountList: this.state.AccountList,
            deleteShow: false,
            currentAccount: this.state.AccountList[0]
        });
    }

    onAccountClick = (account) => {
        this.setState({
            accountActionsShow: true,
            currentAccount: account
        })
    }

    onDepositToAccount = (amount, account) => {
        this.state.AccountList.depositToAccount(account, amount);

        this.setState({
            AccountList: this.state.AccountList,
            accountActionsShow: false,
        });
    }

    onWithdrawFromAccount = (amount, account) => {
        this.state.AccountList.withdrawFromAccount(account, amount);

        this.setState({
            AccountList: this.state.AccountList,
            accountActionsShow: false
        });
    }

    render() {

        console.log("addAccount is ", this.state.addAccount);
        const accountListItems = this.state.AccountList.Accounts.map((item, index) =>
           <AccountListItem key={item.acctId}
                            index = {index}
                            account={item}
                            accountClicked={this.onAccountClick}
                            editClicked={this.onEditClick}
                            deleteClicked={this.onDeleteClick}
           />
        );

        return(
            <div>
                <h1>Hello from Accounts</h1>
                <div className = "AppContainer">
                    <AccountSummary accounts={this.state.AccountList} />
                    <div className = "AppPanel">
                          <div className = "ItemBox AppHeader">
                            <span className = "AddItem">Add Account</span>
                            <button className="AppBtn" onClick={this.onBtnAddClick}>
                                <img className="btnImg" src={addbtn} alt="Add"/>
            `                    </button>
                          </div>
                        <div className = "AppList">
                            {accountListItems}
                        </div>
                    </div>
                    <div className = "AppPanel">
                        {(this.state.addAccount)
                            ? <AccountCreate {...this.state}
                                             createClicked = {this.onAccountCreate}
                              />
                            : null }
                        {(this.state.editShow)
                            ? <AccountEdit
                                         account={this.state.currentAccount}
                                         updateAccount = {this.onAccountUpdate}
                              />
                            :null }
                        {(this.state.deleteShow)
                            ? <AccountDelete
                                           account={this.state.currentAccount}
                                           deleteAccount = {this.onDeleteAccount}
                              />
                            :null }
                        {(this.state.accountActionsShow)
                            ? <AccountActions
                                              account={this.state.currentAccount}
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