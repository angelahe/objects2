import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountActions from "../components/AccountActions";
import Accounts from "../components/accounts";
import '../styles/Accounts.css'
import renderer from "react-test-renderer";

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountActions />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  shallow(<AccountActions />);
});

xtest('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountActions />).toJSON();
  expect(tree).toMatchSnapshot();
});