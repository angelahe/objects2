import React from 'react';
import community from './community';
import CityCreate from './CityCreate';
import CityEdit from './CityEdit';
import OneCommunity from './OneCommunity';
import CommunitySummary from './CommunitySummary';
import addbtn from '../images/add_FFFFFF.png';

import '../styles/Styles140.css';

class CommunityUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CommunityList: new community(),
      currentCity: null,
      addShow: false,
      editShow: false
    }
  }

  onBtnCloseClick = (closeType) => {
    if (closeType === "create") this.setState ({addShow: false});
    if (closeType === "edit") this.setState ({editShow: false});
  }

  onBtnAddClick = () => {
    this.setState({addShow: true});
  }

  onBtnEditClick = () => {
    this.setState({editShow: true});
  }

  onCityUpdate = (updated) => {
    console.log("in city update");
    this.state.CommunityList.updateCommunity(updated);

    this.setState({
      CommunityList: this.state.CommunityList,
      editShow: false
    })

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
    const communities = this.state.CommunityList.Communities.map((city, index) =>
    <OneCommunity key = {city.Name}
                  city = {city}
    />
    );

    return(
      <div>

        <h1>This is the Community UI</h1>
        <div className="AppContainer">
          <CommunitySummary communities={this.state.CommunityList}/>
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
              ? <CityCreate createClicked = {this.onCityCreate}
                            closeClicked={this.onBtnCloseClick}
                />
              :null
            }
            {(this.state.editShow)
              ? <CityEdit
                         city={this.state.currentCity}
                         updateCity = {this.onCityUpdate}
                         closeClicked={this.onBtnCloseClick}
                />
              : null
              }
          </div>

        </div>
      </div>
    )
  }
}
export default CommunityUI
