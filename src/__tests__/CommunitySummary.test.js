import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CommunitySummary from "../components/CommunitySummary";
import CommunityUI from "../components/CommunityUI";
import community from "../components/community";
import city from "../components/city";
import renderer from "react-test-renderer";

const props = new CommunityUI();

it('renders the mostNorthern, mostSouthern, and total population', () => {
  let communityList = new community();

  communityList.addCommunity("Calgary", "51.0486 N", "114.0708 W", 1239000);
  communityList.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  communityList.addCommunity("Edmonton", "53.5444 N", "113.4909 W", 932550);
  communityList.addCommunity("Auckland", "36.8485 S", "174.7633 E", 1614000);

  const div = document.createElement('div');
  const component = ReactDOM.render(<CommunitySummary communities={communityList}/>, div);
  expect(component.state.mostNorthern).toEqual("Edmonton");
  expect(component.state.mostSouthern).toEqual("Auckland");
  expect(component.state.totalPopulation).toEqual(8237550);

});

it('renders a summary with no cities', () => {
  const wrapper = shallow(<CommunitySummary communities={new community()} />);

  expect(wrapper.state('totalPopulation')).toEqual(0);
});

test('CommunitySummary renders correctly', () => {
  const tree = renderer.create(<CommunitySummary communities={props.state.CommunityList} />).toJSON();
  expect(tree).toMatchSnapshot();
});