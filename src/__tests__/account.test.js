import Account from '../components/account';

test("Test account class", () => {
//    console.log("Testing constructor");
    const newAccount = new Account(25, "James", 0);
//    console.log("Test name = new instance name");
    expect(newAccount.acctName).toBe("James");
//    console.log("Test balance = new instance balance");
    expect(newAccount.balance).toBe(25);
//    console.log("Test getbalance = new instance balance");
    expect(newAccount.getbalance()).toBe(25);
//    console.log("Test balance increased by deposit amount");
    newAccount.deposit(10);
    expect(newAccount.balance).toBe(35);
//    console.log("Test balance decrease by withdraw amount");
    newAccount.withdraw(30);
    expect(newAccount.balance).toBe(5);
    //approach #2 for writing tests
    expect(new Account(10, "Sue").getbalance()).toBe(10);
    expect(new Account(25, "James").deposit(10)).toBe(35);
    expect(new Account(25, "James").withdraw(10)).toBe(15);

});

