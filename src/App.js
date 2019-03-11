import React, { Component } from 'react';
import './App.css';
import Starter from './components/Starter';
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
        console.log("in onNavClickChanged, clickbtn is", clickBtn);
        this.setState({navClicked : clickBtn, message : clickBtn + " was clicked"});
    }

    render() {

        return (

            <div className="App">
                <NavBar navClicked={this.onNavClickChanged}/>
                {(this.state.navClicked==="default")? <Starter /> : null}
                {(this.state.navClicked==="math")? <Starter /> : null}
            </div>
        );
    }
}

export default App;
