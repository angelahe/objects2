import React from 'react';
import community from './community';
import CityCreate from './CityCreate';
import OneCommunity from './OneCommunity';
import CommunitySummary from './CommunitySummary';
import addbtn from '../images/add_FFFFFF.png';

import '../styles/Styles140.css';

class CommunityUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CommunityList: new community(),
      counter : 0,
      addShow: false
    }

    this.increment = () => this.setState({counter: this.state.counter+1});
    this.decrement = () => this.setState({counter: this.state.counter-1});
    //this.addCommunity = () => this.setState({CommunityList : this.state.CommunityList.addCommunity(cityname, latitude, longitude, population)});
  }

  onBtnAddClick = () => {
    this.setState({addShow: true});
  }

  onCityCreate = (name, latitude, longitude, population) => {
    this.state.CommunityList.addCommunity(name, latitude, longitude, population);

    this.setState({
      CommunityList: this.state.CommunityList,
      addShow: false
      }
    )

  }

  render() {
    const communities = this.state.CommunityList.Community.map((city, index) =>
    <OneCommunity key = {city.Name}
                  city = {city}
    />
    );

    return(
      <div>

        <h1>This is the Community UI</h1>
        <div className="AppContainer">
          <CommunitySummary {...this.state}/>
          <div className="AppPanel">
            <div className="ItemBox AppHeader">
              <span className="AddItem">Add City</span>
              <button className="AppBtn" onClick={this.onBtnAddClick}>
                <img className="btnImg" src={addbtn} alt="Add"/>
              </button>
            </div>
            <div className = "AppList">
              {communities}
            </div>
          </div>
          <div className = "AppPanel">
            {(this.state.addShow)
              ? <CityCreate createClicked = {this.onCityCreate} />
              :null
            }
          </div>

        </div>
      </div>
    )
  }
}
export default CommunityUI
