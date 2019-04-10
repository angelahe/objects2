import React from "react";
import '../App.css';

import analytics from '../images/analytics.svg';
import creative from '../images/creative.svg';
import leader from '../images/leader.svg';
import teamwork from '../images/teamwork.svg';
import teamwork2 from '../images/teamwork2.svg';

const NavBar = (props) => {

    function handleClick(e) {
        const whichOne = e.target.getAttribute("navbtn");
//      props.navClicked(e.target.getAttribute("navbtn"));
        props.navClicked(whichOne);
    }

    return (
        <div>
            <header>
                <img src={analytics} navbtn="default" onClick={handleClick} className="App-icon" alt="one"/>
                <img src={creative} navbtn="math" onClick={handleClick} className="App-icon" alt="two"/>
                <img src={leader} navbtn="account" onClick={handleClick} className="App-icon" alt="three"/>
                <img src={teamwork} navbtn="accounts" onClick={handleClick} className="App-icon" alt="four"/>
                <img src={teamwork2} navbtn="community" onClick={handleClick} className="App-icon" alt="five"/>
            </header>
            <p>{props.message}</p>
        </div>
    );
}
export default NavBar
