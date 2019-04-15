import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LinkedListUI from "../components/LinkedListUI";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkedListUI />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<LinkedListUI />);
});

test('LinkedList renders correctly', () => {
  const tree = renderer.create(<LinkedListUI />).toJSON();
  expect(tree).toMatchSnapshot();
});