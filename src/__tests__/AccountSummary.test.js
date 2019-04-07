import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountSummary from "../components/AccountSummary";
import AccountsUI from "../components/AccountsUI";
import renderer from "react-test-renderer";


const props = new AccountsUI();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountSummary {...props.state}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AccountSummary {...props.state}/>);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountSummary {...props.state} />).toJSON();
  expect(tree).toMatchSnapshot();
});