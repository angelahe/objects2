import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountDelete from "../components/AccountDelete";
import renderer from "react-test-renderer";

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountDelete />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  shallow(<AccountDelete />);
});

xtest('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountDelete />).toJSON();
  expect(tree).toMatchSnapshot();
});