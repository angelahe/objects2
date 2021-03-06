class Accounts {

    constructor() {
        this.Accounts = [];
    }

    addAccount(newAccount) {
        //this should call account to create new account - balance, name, etc passed in
        this.Accounts.push(newAccount);
        return this.Accounts;
    }

    deleteAccount(account) {
        const index = this.Accounts.findIndex(a => a.acctId === account.acctId);
        if(index || index ===0) {
            this.Accounts.splice(index, 1);
            return true;
        }
        else return false;

    }

    updateAccount(newName, newBalance, account) {
        const index = this.Accounts.findIndex(a => a.acctId === account.acctId);
        if (index || index === 0) {
            this.Accounts[index].acctName = newName;
            this.Accounts[index].balance = newBalance;
            return true;
        }
        else return false;
    }


    //update the account balance of the account, return true on success, false on fail
    withdrawFromAccount(account, amount = 0) {

        const thisAccount = this.Accounts.find(a => a.acctId === account.acctId);
        if (thisAccount) {
            thisAccount.withdraw(amount);
            return true;
        }
        else
            return false;

    }

    //update the account balance of the account, return true on success, false on fail
    depositToAccount(account, amount) {

        const thisAccount = this.Accounts.find(a => a.acctId === account.acctId);
        if (thisAccount) {
            thisAccount.deposit(amount);
            return true;
        }
        else
            return false;
    }

    //returns the balance of the lowest account, 0 if empty
    getMinAccount() {

        let len = this.Accounts.length, min = Infinity;

        while (len--) {
            if (this.Accounts[len].balance < min) {
                min = this.Accounts[len].balance;
            }
        }

        return(min !== Infinity ? min : 0);

    }

    //returns the balance of the account with the highest balance, or first highest item if tied
    getMaxAccount() {

        let len = this.Accounts.length, max = 0;

        while (len--) {
            if (this.Accounts[len].balance > max) {
                max = this.Accounts[len].balance;
            }
        }
        return(max);

    }

    getAccountTotal() {

        const totalBalance = this.Accounts.reduce(function(acc, obj) {return acc + obj.balance }, 0);

        return totalBalance;

    }


}

export default Accounts;