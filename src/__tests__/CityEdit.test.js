import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CityEdit from "../components/CityEdit";
import '../styles/Styles140.css'
import renderer from "react-test-renderer";
import CommunityUI from "../components/CommunityUI";
import city from "../components/city";

const props = new CommunityUI();
const thiscity = new city("Calgary", "100 N", "100 W", 1000000);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityEdit city={thiscity}
                            updateCity = {props.onCityUpdate}
                            closeClicked={props.onBtnCloseClick}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<CityEdit city={thiscity}
                    updateCity = {props.onCityUpdate}
                    closeClicked={props.onBtnCloseClick}
  />);
});

test('CityActions renders correctly', () => {
  const tree = renderer.create(<CityEdit city={thiscity}
                                         updateCity = {props.onCityUpdate}
                                         closeClicked={props.onBtnCloseClick}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});