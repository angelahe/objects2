import React from 'react';
import closebtn from '../images/close_FFFFFF.png';
import "../styles/Styles140.css";

const CityCreate = (props) => {

  console.log("props is ", props);

  function handleCloseClick() {
    console.log("in handleCloseClick");
  }

  function handleAddClick() {
    console.log("in handleAddClick function");
    const name = document.getElementById("cityName").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const population = Number(document.getElementById("population").value);
    props.createClicked(name, latitude, longitude, population);
  }

  return(
    <div>
      <div className = "ItemBox AppHeader">
        <span className= "AddItem">Add City</span>
        <button className="AppBtn" onClick={handleCloseClick}>
          <img className="btnImg" src={closebtn} alt="Close"/>
        </button>
      </div>
      <div className = "ItemBox">
        <span className = "DetailText">City Name:</span>
        <input className="InputText" id="cityName" autoFocus={true}></input><br/>
        <span className = "DetailText">Latitude:</span>
        <input className="InputText" id="latitude" autoFocus={true}></input><br/>
        <span className = "DetailText">Longitude:</span>
        <input className="InputText" id="longitude" autoFocus={true}></input><br/>
        <span className = "DetailText">Population:</span>
        <input className = "InputText" id="population" type="number"></input><br/><br/>
        <button className="btnText" onClick={handleAddClick}>Add City</button>

      </div>
    </div>
  )
}
export default CityCreate