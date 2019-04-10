import React from 'react';
import '../styles/Styles140.css';
import city from '../components/city';
import closebtn from '../images/close_FFFFFF.png';

const CityEdit = (props) => {

  function handleCloseClick() {
    props.closeClicked("edit");
  }

  function handleUpdateClick() {
    const newName = document.getElementById("cityName").value;
    const newLatitude = document.getElementById("latitude").value;
    const newLongitude = document.getElementById("longitude").value;
    const newPopulation = document.getElementById("population").value;
    let updatedCity = new city(newName, newLatitude, newLongitude, newPopulation);
    props.closeClicked(updatedCity);
  }

  const cityName = props.City.cityName;
  const latitude = props.City.latitude;
  const longitude = props.City.longitude;
  const population = props.City.population;


  return(
    <div>
      <div className = "ItemBox AppHeader">
        <span className = "AddItem">Edit City</span>
        <button className="AppBtn" onClick={handleCloseClick}>
          <img className="btnImg" src={closebtn} alt="Close"/>
        </button>
      </div>
      <div className = "ItemBox">
        <span className = "DetailText">City Name:</span>
        <input className="InputText" id="cityName" defaultValue={cityName} autoFocus={true}></input><br/>
        <span className = "DetailText">Population:</span>
        <input className = "InputText" id = "population" type="number" defaultValue={population}></input><br/><br/>
        <button className="btnText" onClick={handleUpdateClick}>Update Account</button>

      </div>
    </div>
  )
}

export default CityEdit;

