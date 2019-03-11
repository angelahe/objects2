import React from "react";
import account from "./account";

class AccountUI extends React.Component {

    constructor () {
        super()
        this.state = {
            balance: 0
        }
    }

    render() {

        return(
            <div>
                <h1>Hello world from Account</h1>
                <p>My Account</p>

                <input id="startBalance" type="number" placeholder="Enter starting balance"/>
                <button>Create Account</button>

            </div>

        )
    }
}

export default AccountUI;