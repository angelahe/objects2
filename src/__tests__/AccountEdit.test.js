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
//console.log("newAccounts is ", newAccounts);
props.state.AccountList = newAccounts;
const account = newAccount;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountEdit account={account}
                               updateAccount = {props.onAccountUpdate}
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AccountEdit account={account}
                       updateAccount = {props.onAccountUpdate}
          />);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountEdit account={account}
                                            updateAccount = {props.onAccountUpdate}
                               />).toJSON();
  expect(tree).toMatchSnapshot();
});