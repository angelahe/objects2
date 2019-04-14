import React, { Component } from 'react';
import './App.css';
//import Starter from './components/Starter';
import MathComp from './components/MathComp';
import AccountUI from './components/AccountUI';
import AccountsUI from './components/AccountsUI';
import CommunityUI from './components/CommunityUI';
import LinkedListUI from './components/LinkedListUI';

import NavBar from './components/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClicked: "default",
            message: "Starting message"
        };
    }

    onNavClickChanged = (clickBtn) => {
//        console.log("in onNavClickChanged, clickbtn is", clickBtn);
        this.setState({navClicked : clickBtn, message : clickBtn + " was clicked"});
    }

    render() {

        return (

            <div className="App">
                <NavBar navClicked={this.onNavClickChanged}/>
                {(this.state.navClicked==="linked") ? <LinkedListUI /> : null}
                {(this.state.navClicked==="math") ? <MathComp /> : null}
                {(this.state.navClicked==="account") ? <AccountUI /> : null}
                {(this.state.navClicked==="accounts") ? <AccountsUI /> : null}
                {(this.state.navClicked==="community") ? <CommunityUI/> : null}
            </div>
        );
    }
}

export default App;
