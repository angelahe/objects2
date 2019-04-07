import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountsUI from "../components/AccountsUI";
import AccountListItem from "../components/AccountListItem";
import '../styles/Accounts.css'

import renderer from "react-test-renderer";

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  shallow(<AccountListItem />);
});

xtest('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});