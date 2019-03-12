import React from "react";
import Account from "./account";

class AccountUI extends React.Component {

    constructor () {
        super()
        this.state = {
            balance: "",
            myaccount: {}
        }
    }

    handleCreateClick = () => {
        const startBalance = Number(document.getElementById("startBalance").value);
        this.setState({myaccount : new Account(startBalance, "My account", 0), balance: startBalance});
    }

    handleDepositClick = () => {
        const amount = Number(document.getElementById("amount").value);
        this.setState({balance: this.state.myaccount.deposit(amount)})
    }

    handleWithdrawClick = () => {
        const amount = Number(document.getElementById("amount").value);
        this.setState({balance: this.state.myaccount.withdraw(amount)})
    }

    render() {

        return(
            <div>
                <h1>Hello world from Account</h1>
                <p>My Account</p>
                {(this.state.balance === "")
                    ? <div>
                        <input id="startBalance" type="number" placeholder="Enter starting balance"/>
                        <button onClick={this.handleCreateClick}>Create Account</button>
                      </div>
                    : null
                }
                {(this.state.balance !== "")
                    ? <div>
                        <input id="amount" type="number" placeholder="Enter an amount" />
                        <button id="deposit" onClick={this.handleDepositClick}>Deposit</button>
                        <button id="withdraw" onClick={this.handleWithdrawClick}>Withdraw</button>
                        <br /><br />
                        <span>Balance is :</span>
                        {this.state.myaccount.getbalance()}
                      </div>
                    : null
                }


            </div>

        )
    }
}

export default AccountUI;