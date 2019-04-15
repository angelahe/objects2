import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import QueueItem from "../components/QueueItem";
import '../styles/Styles140.css'

import renderer from "react-test-renderer";

const person = "Susie";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueueItem key={person}
                             person = {person}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<QueueItem key={person}
                     person = {person}
  />);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<QueueItem key={person}
                                          person = {person}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});