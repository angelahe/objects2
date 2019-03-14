class Account {

    constructor(startingBalance, accountName, id) {
        this.acctId = id;
        this.acctName = accountName;
        this.balance = startingBalance;
    }

    deposit(amount) {
        this.balance+=amount;
        return this.balance;
    }

    withdraw(amount) {
        this.balance-=amount;
        return this.balance;
    }

    getbalance() {
        return this.balance;
    }

}

export default Account
