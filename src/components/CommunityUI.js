import React from 'react';
import city from './city';
import community from './community';
import OneCommunity from './OneCommunity';
import CommunitySummary from './CommunitySummary';
import addbtn from '../images/add_FFFFFF.png';

import '../styles/Accounts.css';

class CommunityUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CommunityList: new community(),
      counter : 0
    }

    this.increment = () => this.setState({counter: this.state.counter+1});
    this.decrement = () => this.setState({counter: this.state.counter-1});
    //this.addCommunity = () => this.setState({CommunityList : this.state.CommunityList.addCommunity(cityname, latitude, longitude, population)});
  }

  onBtnAddClick = () => {
    //get the info from the fields
    console.log("in btnAddClick for Community");
    this.state.CommunityList.addCommunity("Calgary", "100 N", "100 W", 1000000);

  }


  render() {
    console.log("communities are", this.state.CommunityList);
    const communities = this.state.CommunityList.Community.map((item, index) =>
    <OneCommunity key = {item.Name}
                  item = {item}
    />
    );

    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>
          Counter: {this.state.counter}
        </div>
        <h1>This is the Community UI</h1>
        <div className="AccountContainer">
          <CommunitySummary {...this.state}/>
          <div className="AccountPanel">
            <div className="ItemBox AccountHeader">
              <span className="AddAccount">Add City</span>
              <button className="AccountBtn" onClick={this.onBtnAddClick}>
                <img className="btnImg" src={addbtn} alt="Add"/>
              </button>
            </div>
          </div>
          <div className = "AccountList">
          {communities}
        </div>
        </div>
      </div>
    )
  }
}
export default CommunityUI
