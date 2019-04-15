import React from "react";
import '../App.css';

//import analytics from '../images/analytics.svg';
//import creative from '../images/creative.svg';
//import leader from '../images/leader.svg';
//import teamwork from '../images/teamwork.svg';
//import teamwork2 from '../images/teamwork2.svg';

import react from '../images/react_FFFFFF.png'
import calculate from '../images/calculate_FFFFFF.png'
import account from '../images/account_FFFFFF.png'
import accounts from '../images/accounts2_FFFFFF.png'
import city from '../images/city_FFFFFF.png'
import link from '../images/link_FFFFFF.png'
import queue from '../images/queue_FFFFFF.png'

const NavBar = (props) => {

    function handleClick(e) {
        const whichOne = e.target.getAttribute("navbtn");
//      props.navClicked(e.target.getAttribute("navbtn"));
        props.navClicked(whichOne);
    }

    return (
        <div>
            <header>
                <img src={react} navbtn="default" onClick={handleClick} className="App-icon" alt="react"/>
                <img src={calculate} navbtn="math" onClick={handleClick} className="App-icon" alt="calculate"/>
                <img src={account} navbtn="account" onClick={handleClick} className="App-icon" alt="account"/>
                <img src={accounts} navbtn="accounts" onClick={handleClick} className="App-icon" alt="accounts"/>
                <img src={city} navbtn="community" onClick={handleClick} className="App-icon" alt="city"/>
                <img src={link} navbtn="linked" onClick={handleClick} className="App-icon" alt="linked list"/>
                <img src={queue} navbtn="queue" onClick={handleClick} className="App-icon" alt="queue"/>

            </header>
            <p>{props.message}</p>
        </div>
    );
}
export default NavBar
