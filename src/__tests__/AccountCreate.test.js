import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountCreate from "../components/AccountCreate";
import AccountsUI from "../components/AccountsUI";
import renderer from "react-test-renderer";

const props = new AccountsUI();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AccountCreate createClicked = {props.onAccountCreate}/>);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountCreate createClicked = {props.onAccountCreate}/>).toJSON();
  expect(tree).toMatchSnapshot();
});