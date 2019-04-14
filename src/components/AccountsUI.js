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

    onBtnCloseClick = (closeType) => {
//        if (confirm("Do you really want to close this window?")) {
//            console.log("close the window");
//        }
//        else
//            console.log("leave it alone");

        switch (closeType) {
            case "create":
                this.setState ({addAccount: false});
                break;
            case "edit":
                this.setState ({editShow: false});
                break;
            case "delete":
                this.setState ({deleteShow: false});
                break;
            case "actions":
                this.setState ({accountActionsShow: false});
                break;
            default:
                console.log("unknown window type to close");
        }
    }

    onBtnAddClick = () => {
        const changeState = !this.state.addAccount;
        this.setState ({addAccount: changeState});
    }

    onAccountCreate = (name, balance) => {
        this.state.AccountList.addAccount(new Account(balance, name, this.state.nextId));

        this.setState({
            AccountList: this.state.AccountList,
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

        const accountListItems = this.state.AccountList.Accounts.map((item, index) =>
           <AccountListItem key={item.acctId}
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
                            ? <AccountCreate createClicked = {this.onAccountCreate}
                                             closeClicked={this.onBtnCloseClick}
                              />
                            : null }
                        {(this.state.editShow)
                            ? <AccountEdit
                                         account={this.state.currentAccount}
                                         updateAccount = {this.onAccountUpdate}
                                         closeClicked={this.onBtnCloseClick}

                              />
                            :null }
                        {(this.state.deleteShow)
                            ? <AccountDelete
                                           account={this.state.currentAccount}
                                           deleteAccount = {this.onDeleteAccount}
                                           closeClicked={this.onBtnCloseClick}
                              />
                            :null }
                        {(this.state.accountActionsShow)
                            ? <AccountActions
                                              account={this.state.currentAccount}
                                              deposit={this.onDepositToAccount}
                                              withdraw={this.onWithdrawFromAccount}
                                              closeClicked={this.onBtnCloseClick}
                            />
                            : null }
                    </div>
                </div>
            </div>
        )

    }
}
export default AccountsUI