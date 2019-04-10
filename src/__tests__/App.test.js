import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from "enzyme/build";
import renderer from "react-test-renderer";

const props = new App();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

test('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Starter App renders correctly', () => {
  props.state.NavClicked = "default";
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Math App renders correctly', () => {
  props.state.NavClicked = "math";
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Account App renders correctly', () => {
  props.state.NavClicked = "account";
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Accounts App renders correctly', () => {
  props.state.NavClicked = "accounts";
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Communities App renders correctly', () => {
  props.state.NavClicked = "community";
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});