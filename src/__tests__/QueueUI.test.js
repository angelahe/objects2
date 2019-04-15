import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import QueueUI from "../components/QueueUI";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueueUI />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<QueueUI />);
});

test('LinkedList renders correctly', () => {
  const tree = renderer.create(<QueueUI />).toJSON();
  expect(tree).toMatchSnapshot();
});