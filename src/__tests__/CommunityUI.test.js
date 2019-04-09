import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CommunityUI from "../components/CommunityUI";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommunityUI />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<CommunityUI />);
});

test('AccountsUI renders correctly', () => {
  const tree = renderer.create(<CommunityUI />).toJSON();
  expect(tree).toMatchSnapshot();
});