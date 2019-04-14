import React from 'react';
import '../styles/Styles140.css';
import closebtn from '../images/close_FFFFFF.png';

const CityActions = (props) => {

  function handleCloseClick() {
    props.closeClicked("actions");
  }


  function handleClick(e) {
    const amount = Number(document.getElementById("amount").value);
    switch (e.target.getAttribute("elem")) {
      case "movein":
        console.log("movein was clicked");
        props.movedIn(props.city, amount);
        break;
      case "moveout":
        console.log("moveout was clicked")
        props.movedOut(props.city, amount);
        break;
      default:
      //do nothing
    }
  }

  const cityName = props.city.Name;
  const cityLatitude = props.city.Latitude;
  const cityLongitude = props.city.Longitude;
  const cityPopulation = props.city.Population;

  return(
    <div>
      <div className = "ItemBox AppHeader">
        <span className = "AddItem">{cityName}</span>
        <span className = "AddItem">{cityPopulation}</span>
        <span className = "AddItem">{cityLatitude}</span>
        <span className = "AddItem">{cityLongitude}</span>
        <button className="AppBtn" onClick={handleCloseClick}>
          <img className="btnImg" src={closebtn} alt="Close"/>
        </button>
      </div>
      <div className = "ItemBox" onClick={handleClick}>
        <span className = "DetailText">For: </span>
        <span className = "DetailText" >{cityName}</span><br/><br/>
        <span className = "DetailText">Number:</span>
        <input className = "InputText" id = "amount" placeholder="number of people" type="number"></input><br/><br/>
        <button className="btnText" elem="movein">Moved In</button>
        <button className="btnText" elem="moveout">Moved Out</button>
      </div>
    </div>
  )
}
export default CityActions;