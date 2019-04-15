import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AccountsUI from "../components/AccountsUI";
import AccountListItem from "../components/AccountListItem";
import '../styles/Styles140.css'

import renderer from "react-test-renderer";

const props = new AccountsUI();
const item = {acctId : 1,
              acctName: "Savings",
              balance: 1000};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountListItem key={item.acctId}
                                   account={item}
                                   accountClicked={props.onAccountClick}
                                   editClicked={props.onEditClick}
                                   deleteClicked={props.onDeleteClick}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<AccountListItem key={item.acctId}
                           account={item}
                           accountClicked={props.onAccountClick}
                           editClicked={props.onEditClick}
                           deleteClicked={props.onDeleteClick}
  />);
});

test('AccountUI renders correctly', () => {
  const tree = renderer.create(<AccountListItem key={item.acctId}
                                                account={item}
                                                accountClicked={props.onAccountClick}
                                                editClicked={props.onEditClick}
                                                deleteClicked={props.onDeleteClick}

  />).toJSON();
  expect(tree).toMatchSnapshot();
});