import React from 'react';
import '../styles/Styles140.css';
import editbtn from '../images/edit_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';

const OneCommunity = (props) => {

  function handleAccountClick(e) {
    switch(e.target.getAttribute("elemtype")) {
      case "Edit":
        props.editClicked(props.city); break;
      case "Delete":
        props.deleteClicked(props.city); break;
      case "Container":
        props.cityClicked(props.city); break;
      case "Text":
        props.cityClicked(props.city); break;
      default:
        console.log("unknown element clicked for city");
    }
  }

  const communityType = props.city.howBig();

  return (
    <div className="ItemBox AppListItem" elemtype = "Container" onClick={handleAccountClick}>
        <h2>{communityType} {" of "} {props.city.Name}</h2>
        <span className="DetailText" elemtype="Text">Latitude: {props.city.Latitude}</span><br/>
        <span className="DetailText" elemtype="Text">Longitude: {props.city.Longitude}</span><br/>
        <span className="DetailText" elemtype="Text">Population: {props.city.Population}</span><br/>

        <button className="AppBtn" elemtype = "Edit">
          <img className="btnImg" elemtype = "Edit" src={editbtn} alt="Add"/>
        </button>
        <button className="AppBtn Delete" elemtype = "Delete">
          <img className="btnImg" elemtype = "Delete" src={deletebtn} alt="Add"/>
        </button>
        <hr/>
    </div>
  )
}

export default OneCommunity;

