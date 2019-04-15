import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddNode from "../components/AddNode";
import LinkedListUI from "../components/LinkedListUI";
import renderer from "react-test-renderer";

const props = new LinkedListUI();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNode createClicked = {props.onSubjectCreate}
                           closeClicked = {props.onBtnCloseClick}
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AddNode createClicked = {props.onSubjectCreate}
                   closeClicked = {props.onBtnCloseClick}
          />);
});

test('Starter renders correctly', () => {
  const tree = renderer.create(<AddNode createClicked = {props.onSubjectCreate}
                                        closeClicked = {props.onBtnCloseClick}
                               />).toJSON();
  expect(tree).toMatchSnapshot();
});