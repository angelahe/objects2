import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CityCreate from "../components/CityCreate";
import '../styles/Styles140.css'
import renderer from "react-test-renderer";
import CommunityUI from "../components/CommunityUI";

const props = new CommunityUI();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityCreate createClicked = {props.onCityCreate}
                              closeClicked={props.onBtnCloseClick}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<CityCreate createClicked = {props.onCityCreate}
                      closeClicked={props.onBtnCloseClick}
  />);
});

test('CityActions renders correctly', () => {
  const tree = renderer.create(<CityCreate createClicked = {props.onCityCreate}
                                           closeClicked={props.onBtnCloseClick}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});