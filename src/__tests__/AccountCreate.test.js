import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountCreate from "../components/AccountCreate";
import renderer from "react-test-renderer";

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  shallow(<AccountCreate />);
});

xtest('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountCreate />).toJSON();
  expect(tree).toMatchSnapshot();
});