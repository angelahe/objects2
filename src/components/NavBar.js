import React from "react";
import '../App.css';

import analytics from '../images/analytics.svg';
import creative from '../images/creative.svg';
import leader from '../images/leader.svg';
import teamwork from '../images/teamwork.svg';
import teamwork2 from '../images/teamwork2.svg';

const NavBar = (props) => {

    function handleClick(e) {
        console.log("in handleClick function");
        console.log(props.navClicked);
        props.navClicked(e.target.getAttribute("navbtn"));
    }

    return (
        <div>
            <header>
                <img src={analytics} navbtn="default" onClick={handleClick} className="App-icon" alt="one"/>
                <img src={creative} navbtn="math" onClick={handleClick} className="App-icon" alt="two"/>
                <img src={leader} navbtn="leader" onClick={handleClick} className="App-icon" alt="three"/>
                <img src={teamwork} navbtn="teamwork" onClick={handleClick} className="App-icon" alt="four"/>
                <img src={teamwork2} navbtn="teamwork2" onClick={handleClick} className="App-icon" alt="five"/>
            </header>
            <p>{props.message}</p>
        </div>
    );
}
export default NavBar
