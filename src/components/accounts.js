import account from './account';
class Accounts {

    constructor() {
        this.Accounts = [];
    }

    addAccount(newAccount) {
        //this should call account to create new account - balance, name, etc passed in
        this.Accounts.push(newAccount);
        return this.Accounts;
    }

    deleteAccount(index) {
        this.Accounts.splice(index, 1);
        return this.Accounts;
    }

    updateAccount(index, newInfo) {
        this.Accounts[index] = newInfo;
        return this.Accounts;
    }


    //update the account balance of the account, return true on success, false on fail
    withdrawFromAccount(index = -1, amount = 0) {

        //on a non null account, withdraw the amount
        if ((this.Accounts.length > index) &&  (index >= 0)) {
            this.Accounts[index].withdraw(amount);
            return(true);
        }
        else
            return(false);

    }

    //update the account balance of the account, return true on success, false on fail
    depositToAccount(index, amount) {
        if ((this.Accounts.length > index) &&  (index >= 0)) {
            this.Accounts[index].deposit(amount);
            return(true);
        }
        else
            return(false);
    }

    //returns the balance of the lowest account, 0 if empty
    getMinAccount() {

        let len = this.Accounts.length, min = Infinity, index = Infinity;

        while (len--) {
            if (this.Accounts[len].balance < min) {
                min = this.Accounts[len].balance;
                index = len;
            }
        }

        return(min !== Infinity ? min : 0);

    }

    //returns the index to the account with the highest balance, or first highest item if tied
    getMaxAccount() {

        let len = this.Accounts.length, max = 0, index = Infinity;

        while (len--) {
            if (this.Accounts[len].balance > max) {
                max = this.Accounts[len].balance;
                index = len;
            }
        }
        return(max);

    }

    getAccountTotal() {

        let len = this.Accounts.length,  total = 0;

        while (len--) {
            if (this.Accounts[len].balance > 0) {
                total+= this.Accounts[len].balance;
            }
        }

        return(total);
    }


}

export default Accounts;