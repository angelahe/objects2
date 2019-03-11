import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MathComp from "../components/MathComp";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MathComp />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    shallow(<MathComp />);
});

test('MathComp renders correctly', () => {
    const tree = renderer.create(<MathComp />).toJSON();
    expect(tree).toMatchSnapshot();
});