import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddNode from "../components/AddNode";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNode />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AddNode />);
});

test('Starter renders correctly', () => {
  const tree = renderer.create(<AddNode />).toJSON();
  expect(tree).toMatchSnapshot();
});