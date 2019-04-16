import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountsUI from "../components/AccountsUI";
import renderer from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountsUI />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    shallow(<AccountsUI />);
});

test('AccountsUI renders correctly', () => {
    const tree = renderer.create(<AccountsUI />).toJSON();
    expect(tree).toMatchSnapshot();
});