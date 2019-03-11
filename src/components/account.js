class Account {

    constructor(startingBalance, accountName, id = 0) {
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

    /*
    deposit(amount) {
        return math.sum(this.balance, amount);
    }

    withdraw(amount) {
        return math.sub(this.balance, amount);
    }

    getbalance() {
        return this.balance;
    }
    */

}

export default Account
