import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountUI from "../components/AccountUI";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountUI />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    shallow(<AccountUI />);
});

test('MathComp renders correctly', () => {
    const tree = renderer.create(<AccountUI />).toJSON();
    expect(tree).toMatchSnapshot();
});