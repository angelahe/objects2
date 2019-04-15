import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountActions from "../components/AccountActions";
import '../styles/Styles140.css'
import renderer from "react-test-renderer";
import AccountsUI from "../components/AccountsUI";

const props = new AccountsUI();
const account = {acctId : 1,
  acctName: "Savings",
  balance: 1000};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountActions account={account}
                                  deposit={props.onDepositToAccount}
                                  withdraw={props.onWithdrawFromAccount}
                                  closeClicked={props.onBtnCloseClick}
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AccountActions account={account}
                          deposit={props.onDepositToAccount}
                          withdraw={props.onWithdrawFromAccount}
                          closeClicked={props.onBtnCloseClick}
          />);
});

test('AccountActions renders correctly', () => {
  const tree = renderer.create(<AccountActions account={account}
                                               deposit={props.onDepositToAccount}
                                               withdraw={props.onWithdrawFromAccount}
                                               closeClicked={props.onBtnCloseClick}
                               />).toJSON();
  expect(tree).toMatchSnapshot();
});