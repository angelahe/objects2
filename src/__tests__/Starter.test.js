import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Starter from "../components/Starter";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<Starter />);
});

test('MathComp renders correctly', () => {
  const tree = renderer.create(<Starter />).toJSON();
  expect(tree).toMatchSnapshot();
});