import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CityActions from "../components/CityActions";
import '../styles/Styles140.css'
import renderer from "react-test-renderer";
import CommunityUI from "../components/CommunityUI";
import city from "../components/city";

const props = new CommunityUI();
const thiscity = new city("Calgary", "100 N", "100 W", 1000000);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityActions city={thiscity}
                               movedIn={props.onMovedIn}
                               movedOut={props.onMovedOut}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<CityActions city={thiscity}
                       movedIn={props.onMovedIn}
                       movedOut={props.onMovedOut}
  />);
});

test('CityActions renders correctly', () => {
  const tree = renderer.create(<CityActions city={thiscity}
                                            movedIn={props.onMovedIn}
                                            movedOut={props.onMovedOut}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});