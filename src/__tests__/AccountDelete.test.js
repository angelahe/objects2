import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountDelete from "../components/AccountDelete";
import renderer from "react-test-renderer";
import AccountsUI from "../components/AccountsUI";

const props = new AccountsUI();
const item = {acctId : 1,
  acctName: "Savings",
  balance: 1000};

const index = 1;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountDelete account= {item}
                                 deleteAccount={props.onDeleteAccount}
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AccountDelete account={item}
                         deleteAccount={props.onDeleteAccount}
          />);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountDelete account= {item}
                                              deleteAccount = {props.onDeleteAccount}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});