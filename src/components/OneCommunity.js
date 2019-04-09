import React from 'react';
import '../styles/Styles140.css';

const OneCommunity = (props) => {
  return (
    <div className="ItemBox AppListItem">
        <h2>{props.city.Name}</h2>
        <span className="DetailText">Latitude: {props.city.Latitude}</span><br/>
        <span className="DetailText">Longitude: {props.city.Longitude}</span><br/>
        <span className="DetailText">Population: {props.city.Population}</span><br/>
        <hr/>
    </div>
  )
}

export default OneCommunity;

