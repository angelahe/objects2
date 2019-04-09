import Accounts from '../components/Accounts';
import Account from '../components/account';

test("Test AccountController class", () => {
    //console.log("Test AccountController constructor");
    const newAccountController = new Accounts();
    expect(newAccountController).toEqual({"Accounts":[]});
    const newAccount = new Account(10, "Sue", 0);
    const newAccount2 = new Account(15, "John", 1);
    const newAccount3 = new Account(25, "Andrew", 2);
    //console.log("Add a new acccount to the Account Controller");
    newAccountController.addAccount(newAccount);
    expect(newAccountController).not.toBe({"Accounts": []});
    expect(newAccountController.Accounts.length).toBe(1);
    //console.log("AccountController is", newAccountController);
    //console.log("1st account is", newAccountController.Accounts[0]);
    expect(newAccountController.Accounts[0].acctName).toBe("Sue");
    expect(newAccountController.Accounts[0].balance).toBe(10);
    newAccountController.addAccount(new Account(15, "John", 3));
    expect(newAccountController.Accounts.length).toBe(2);
    //console.log("Test Account delete of 1st account in array of 2");
    expect(newAccountController.deleteAccount(newAccountController.Accounts[0]).length).toBe(1);
    expect(newAccountController.Accounts[0].acctName).toBe("John");
    expect(newAccountController.Accounts[0].balance).toBe(15);
    //console.log("accounts is", newAccountController.Accounts);
    //console.log("Test Account delete of first account of 1, return empty array");
    expect(newAccountController.deleteAccount(newAccountController.Accounts[0]).length).toBe(0);
    //console.log("Test Account delete of middle account in array of 3");
    newAccountController.addAccount(newAccount);
    newAccountController.addAccount(newAccount2);
    newAccountController.addAccount(newAccount3);
    newAccountController.deleteAccount(newAccount2);
    expect(newAccountController.Accounts.length).toBe(2);
    expect(newAccountController.Accounts[0].acctName).toBe("Sue");
    expect(newAccountController.Accounts[1].acctName).toBe("Andrew");
    //console.log("Test Account delete from end of array");
    expect(newAccountController.deleteAccount(newAccount3).length).toBe(1);
    expect(newAccountController.Accounts[0].acctName).toBe("Sue");

});

test("Test AccountController getMinAccount module", () => {
    const newAccount3 = new Account(25, "Andrew", 0 );
    const newAccount1 = new Account(10, "Sue", 1);
    const newAccount2 = new Account(15, "John", 2);
    const newAccount4 = new Account(5, "Mary", 3);
    const newAccountController = new Accounts();
    //console.log("With empty accounts array returns 0");
    expect(newAccountController.getMinAccount()).toBe(0);
    newAccountController.addAccount(newAccount3);
    //console.log("Test that with an array with 1 item returns balance of that item");
    expect(newAccountController.getMinAccount()).toBe(25);
    newAccountController.addAccount(newAccount1);
    //console.log("Test that an array of 2 items with 2nd item as minimum returns that balance");
    expect(newAccountController.getMinAccount()).toBe(10);
    newAccountController.addAccount(newAccount2);
    expect(newAccountController.getMinAccount()).toBe(10);
    newAccountController.addAccount(newAccount4);
    //console.log("Test that last item in array is the minimum ie returns that balance");
    expect(newAccountController.getMinAccount()).toBe(5);
});

test("Test AccountController getmaxAccount module", () => {
    const newAccount1 = new Account(10, "Sue", 0);
    const newAccount2 = new Account(15, "John", 1);
    const newAccount3 = new Account(45, "Andrew", 2);
    const newAccount4 = new Account(35, "Mary", 3);
    const newAccountController = new Accounts();
    //console.log("With empty accounts array returns 0");
    expect(newAccountController.getMaxAccount()).toBe(0);
    newAccountController.addAccount(newAccount1);
    //console.log("With one account returns 0 as index of highest account");
    expect(newAccountController.getMaxAccount()).toBe(10);
    newAccountController.addAccount(newAccount2);
    //console.log("With two accounts and last one is the highest returns index 1");
    expect(newAccountController.getMaxAccount()).toBe(15);
    newAccountController.addAccount(newAccount3);
    newAccountController.addAccount(newAccount4);
    //console.log("returns index in middle of array, in this case 2 as highest index");
    expect(newAccountController.getMaxAccount()).toBe(45);
});

test("Test AccountController getAccountTotal module", () => {
    const newAccount1 = new Account(10, "Sue", 0);
    const newAccount2 = new Account(15, "John", 1);
    const newAccount3 = new Account(45, "Andrew", 2);
    const newAccount4 = new Account(35, "Mary", 3);

    const newAccountController = new Accounts();
    //console.log("With empty accounts array returns Zero");
    expect(newAccountController.getAccountTotal()).toBe(0);
    newAccountController.addAccount(newAccount1);
    //console.log("With one account will return the balance of that account");
    expect(newAccountController.getAccountTotal()).toBe(newAccountController.Accounts[0].balance);
    newAccountController.addAccount(newAccount2);
    newAccountController.addAccount(newAccount3);
    newAccountController.addAccount(newAccount4);
    expect(newAccountController.getAccountTotal()).toBe(105);

});

//withdraw from account allows for a balance to be negative, returns true if successful
test("Test AccountController withdrawFromAccount module", () => {
    const newAccount1 = new Account(10, "Sue", 0);
    const newAccount2 = new Account(15, "John", 1);

    const newAccountController = new Accounts();
    //console.log("With empty accounts array returns false");
    expect(newAccountController.withdrawFromAccount()).toBe(false);
    newAccountController.addAccount(newAccount1);
    expect(newAccountController.withdrawFromAccount(newAccount1, 10)).toBe(true);
    expect(newAccountController.Accounts[0].balance).toBe(0);
    expect(newAccountController.withdrawFromAccount(newAccount1, 10)).toBe(true);
    expect(newAccountController.Accounts[0].balance).toBe(-10);
    newAccountController.addAccount(newAccount2);
    expect(newAccountController.withdrawFromAccount(newAccount2, 10)).toBe(true);
    expect(newAccountController.Accounts[1].balance).toBe(5);
});

//deposit to account allows for balance to go from negative to positive, return true if
//deposit is successful, false if fails
test("Test AccountController depositToAccount module", () => {
    const newAccount1 = new Account(-10, "Sue", 0);
    const newAccount2 = new Account(15, "John", 1);

    const newAccountController = new Accounts();
    //console.log("With empty accounts array returns false");
    expect(newAccountController.depositToAccount()).toBe(false);
    newAccountController.addAccount(newAccount1);
    expect(newAccountController.depositToAccount(newAccount1, 10)).toBe(true);
    expect(newAccountController.Accounts[0].balance).toBe(0);
    expect(newAccountController.depositToAccount(newAccount1, 10)).toBe(true);
    expect(newAccountController.Accounts[0].balance).toBe(10);
    newAccountController.addAccount(newAccount2);
    expect(newAccountController.depositToAccount(newAccount2, 10)).toBe(true);
    expect(newAccountController.Accounts[1].balance).toBe(25);
});