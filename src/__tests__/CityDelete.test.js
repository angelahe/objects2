import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CityDelete from "../components/CityDelete";
import '../styles/Styles140.css'
import renderer from "react-test-renderer";
import CommunityUI from "../components/CommunityUI";
import city from "../components/city";

const props = new CommunityUI();
const thiscity = new city("Calgary", "100 N", "100 W", 1000000);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityDelete city={thiscity}
                               deleteCity={props.onCityDelete}
                               closeClicked={props.onBtnCloseClick}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<CityDelete city={thiscity}
                       deleteCity={props.onCityDelete}
                       closeClicked={props.onBtnCloseClick}
  />);
});

test('CityActions renders correctly', () => {
  const tree = renderer.create(<CityDelete city={thiscity}
                                            deleteCity={props.onCityDelete}
                                            closeClicked={props.onBtnCloseClick}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});