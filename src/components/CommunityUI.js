import React from 'react';
import community from './community';
import CityCreate from './CityCreate';
import CityEdit from './CityEdit';
import CityDelete from './CityDelete';
import OneCommunity from './OneCommunity';
import CommunitySummary from './CommunitySummary';
import CityActions from './CityActions';
import addbtn from '../images/add_FFFFFF.png';

import '../styles/Styles140.css';

class CommunityUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CommunityList: new community(),
      currentCity: null,
      addShow: false,
      editShow: false,
      actionsShow: false,
      deleteShow: false
    }
  }

  onBtnCloseClick = (closeType) => {
    if (closeType === "create") this.setState ({addShow: false});
    if (closeType === "edit") this.setState ({editShow: false});
    if (closeType === "delete") this.setState ({deleteShow: false});
    if (closeType === "actions") this.setState ({actionsShow: false});
  }

  onBtnAddClick = () => {
    this.setState({addShow: true});
  }

  onBtnEditClick = () => {
    this.setState({editShow: true});
  }

  onCityClick = (city) => {
    this.setState({
      actionsShow: true,
      currentCity: city
    })
  }

  onEditClick = (city) => {
    this.setState({
      editShow: true,
      currentCity: city
    })
  }

  onDeleteClick = (city) => {
    this.setState({
      deleteShow: true,
      currentCity: city
    })
  }

  onCityDelete = (city) => {
    this.state.CommunityList.deleteCity(city);

    this.setState({
      CommunityList: this.state.CommunityList,
      deleteShow: false
    })
  }

  onCityUpdate = (city, updated) => {
    console.log("in city update");
    this.state.CommunityList.updateCommunity(city, updated);

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

  onMovedIn = (city, number) => {
    console.log("in moved in number is", number);
    this.state.CommunityList.movedIn(city, number);

    this.setState({
      CommunityList: this.state.CommunityList,
      actionsShow: false,
    });
  }

  onMovedOut = (city, number) => {
    console.log("in moved out number is", number);
    this.state.CommunityList.movedOut(city, number);

    this.setState({
      CommunityList: this.state.CommunityList,
      actionsShow: false,
    });
  }

  render() {
    const communities = this.state.CommunityList.Communities.map((city, index) =>
    <OneCommunity key = {city.Name}
                  city = {city}
                  cityClicked={this.onCityClick}
                  editClicked={this.onEditClick}
                  deleteClicked={this.onDeleteClick}
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
            {(this.state.deleteShow)
              ? <CityDelete
                        city={this.state.currentCity}
                        deleteCity={this.onCityDelete}
                        closeClicked={this.onBtnCloseClick}
                />
              :null
              }
            {(this.state.actionsShow)
              ? <CityActions
                city={this.state.currentCity}
                movedIn={this.onMovedIn}
                movedOut={this.onMovedOut}
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
