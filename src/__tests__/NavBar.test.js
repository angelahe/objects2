import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavBar from "../components/NavBar";
import App from "../App";
import renderer from "react-test-renderer";

const props = new App();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar navClicked={props.onNavClickChanged}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<NavBar navClicked={props.onNavClickChanged}/>);
});

test('MathComp renders correctly', () => {
  const tree = renderer.create(<NavBar navClicked={props.onNavClickChanged}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

xtest('call navClicked with correct argument when click default app', () => {
  const didClick = jest.fn();
  const wrapper = shallow(
    <NavBar navClicked={props.onNavClickChanged}/>
  );
  const n = wrapper.find({navbtn: 'default'});
  const mockedEvent = {target: {navbtn: "default"}};

  //const mockedEvent = {e: {}}
  //n.simulate('click', mockedEvent);
  //n.simulate('click', {e.target.getattribute: "navbtn") = "default"}});
  n.simulate('click', mockedEvent);
  expect(navClicked).toBeCalledWith("default");
});