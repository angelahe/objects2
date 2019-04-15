import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import DeleteNode from "../components/DeleteNode";
import LinkedListUI from "../components/LinkedListUI";
import renderer from "react-test-renderer";

const props = new LinkedListUI();
const node = {subject: "Kitten",
              amount: 100,
              next: null };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeleteNode node = {node}
                              deleteSubject = {props.onSubjectDelete}
                              closeClicked = {props.onBtnCloseClick}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<DeleteNode node = {node}
                      deleteSubject = {props.onSubjectDelete}
                      closeClicked = {props.onBtnCloseClick}
  />);
});

test('Starter renders correctly', () => {
  const tree = renderer.create(<DeleteNode node = {node}
                                           deleteSubject = {props.onSubjectDelete}
                                           closeClicked = {props.onBtnCloseClick}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});