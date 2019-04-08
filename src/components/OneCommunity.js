import React from 'react';
import '../styles/Accounts.css';
import editbtn from "../images/edit_FFFFFF.png";
import deletebtn from "../images/delete_FFFFFF.png";

const OneCommunity = (props) => {
  return (
    <div className="ItemBox AccountListItem">
        <h1>{props.item.Name}</h1>

        <p className="DetailText">Latitude: {props.item.Latitude}</p>
        <p className="DetailText">Longitude: {props.item.Longitude}</p>
        <p className="DetailText">Population: {props.item.Population}</p>
        <hr/>
    </div>
  )
}

export default OneCommunity;

