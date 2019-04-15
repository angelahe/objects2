import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OneCommunity from "../components/OneCommunity";
import CommunityUI from "../components/CommunityUI";
import city from "../components/city";
import renderer from "react-test-renderer";

const props = new CommunityUI();
const thiscity = new city("Calgary", "100 N", "100 W", 1000000);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OneCommunity key = {thiscity.Name}
                                city = {thiscity}
                                cityClicked={props.onCityClick}
                                editClicked={props.onEditClick}
                                deleteClicked={props.onDeleteClick}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<OneCommunity key = {thiscity.Name}
                      city = {thiscity}
                      cityClicked={props.onCityClick}
                      editClicked={props.onEditClick}
                      deleteClicked={props.onDeleteClick}
  />);
});

test('Starter renders correctly', () => {
  const tree = renderer.create(<OneCommunity key = {thiscity.Name}
                                           city = {thiscity}
                                           cityClicked={props.onCityClick}
                                           editClicked={props.onEditClick}
                                           deleteClicked={props.onDeleteClick}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});