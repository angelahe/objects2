import React from 'react';
import '../styles/Styles140.css'
import closebtn from '../images/close_FFFFFF.png';

const CityDelete = (props) => {

  function handleCloseClick() {
    props.closeClicked("delete");
  }

  function handleDeleteClick() {
    console.log("in handleUpdateClick");
    props.deleteCity(props.city);
  }

  const cityName = props.city.Name;
  const latitude = props.city.Latitude;
  const longitude = props.city.Longitude;
  const population = props.city.Population;

  return(
    <div>
      <div className = "ItemBox AppHeader">
        <span className = "AddItem">Delete City</span>
        <button className="AppBtn" onClick={handleCloseClick}>
          <img className="btnImg" src={closebtn} alt="Close"/>
        </button>
      </div>
      <div className = "ItemBox">
        <span className = "DetailText">City Name:</span>
        <span className = "DetailText">{cityName}</span><br/>
        <span className = "DetailText">Latitude:</span>
        <span className = "DetailText">{latitude}</span><br/>
        <span className = "DetailText">Longitude:</span>
        <span className = "DetailText">{longitude}</span><br/>
        <span className = "DetailText">Population: </span>
        <span className = "DetailText">{population}</span><br/>
        <button className="btnText" onClick={handleDeleteClick}>Delete City</button>
      </div>
    </div>
  )

}
export default CityDelete;