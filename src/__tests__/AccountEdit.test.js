import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountEdit from "../components/AccountEdit";
import AccountsUI from "../components/AccountsUI";
import Account from "../components/account";
import Accounts from "../components/accounts";

import renderer from "react-test-renderer";

let props = new AccountsUI();

const newAccount = new Account(100, "Test", 0);
const newAccounts = new Accounts();
newAccounts.addAccount(newAccount);
console.log("newAccounts is ", newAccounts);
props.index = 0;
props.state.AccountList = newAccounts;

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountEdit {...props.state} index = {0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  shallow(<AccountEdit {...props.state}/>);
});

xtest('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountEdit {...props.state}/>).toJSON();
  expect(tree).toMatchSnapshot();
});