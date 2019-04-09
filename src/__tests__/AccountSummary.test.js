import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountSummary from "../components/AccountSummary";
import AccountsUI from "../components/AccountsUI";
import account from "../components/account";
import renderer from "react-test-renderer";
import AccountCreate from "../components/AccountCreate";


const props = new AccountsUI();

it('renders the min, max, and total balances', () => {
  const accounts = [
    new account(10, 'savings', 1),
    new account(50, 'chequing', 2),
    new account(30, 'tfsa', 3)
  ];
  const div = document.createElement('div');
  const component = ReactDOM.render(<AccountSummary accounts={accounts} />, div);
  expect(component.state.lowest).toEqual(10);
  expect(component.state.highest).toEqual(50);
  expect(component.state.total).toEqual(90);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a summary with no accounts', () => {
  const wrapper = shallow(<AccountSummary accounts={[]} />);

  expect(wrapper.state('lowest')).toEqual(0);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountSummary {...props.state} />).toJSON();
  expect(tree).toMatchSnapshot();
});