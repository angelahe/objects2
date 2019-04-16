import React from "react";
import LIFOqueue from "./LIFOqueue";
import FIFOqueue from "./FIFOqueue";
import QueueItem from "./QueueItem";

import '../styles/Styles140.css';
import addbtn from '../images/add_FFFFFF.png';
import forward from "../images/forward2_FFFFFF.png";

class QueueUI extends React.Component {

  constructor() {
    super()
    this.state = {
      queue1: new LIFOqueue(),
      queue2: new FIFOqueue(),
      queue1out: "",
      queue2out: ""
    }
  }

  onBtnAdd1Click = () => {
    const name = document.getElementById("queue1name").value;
    console.log("add to this queue ", name);
    this.state.queue1.addToQueue(name);
    this.setState({queue1: this.state.queue1});
    document.getElementById("queue1name").value = "";
  }

  onBtnAdd2Click = () => {
    const name = document.getElementById("queue2name").value;
    console.log("add to 2nd queue ", name);
    this.state.queue2.addToQueue(name);
    this.setState({queue2: this.state.queue2});
    document.getElementById("queue2name").value = "";
  }

  onNextQueue1Click = () => {
    const nextFromQueue = this.state.queue1.popFromQueue();
    this.setState({queue1out: nextFromQueue });

  }

  onNextQueue2Click = () => {
    const nextFromQueue = this.state.queue2.firstFromQueue();
    this.setState({queue2out: nextFromQueue});
  }

  render() {

    const queue1items = this.state.queue1.queue.map((person) =>
      <QueueItem key={person} person={person}/>
    );
    const queue2items = this.state.queue2.queue.map((person) =>
      <QueueItem key={person} person={person}/>
    );

    return(
      <div>
        <h1>Hello from LIFO and FIFO</h1>
        <div className = "AppContainer">
          <div className = "AppPanel">
            <h2>LIFO Queue</h2>
            <div className = "ItemBox AppHeader">
              <span className = "AddItem">Add to Queue</span>
              <input className="InputText" id="queue1name" placeholder="next into queue"></input><br/>
              <button className="AppBtn" onClick={this.onBtnAdd1Click}>
                <img className="btnImg" src={addbtn} alt="Add"/>
              </button>
            </div>
            <div className = "AppList">
              {queue1items}
            </div>
            <div className = "ItemBox AppHeader">
              <span className = "AddItem">Pull from Queue:</span>
              <span className = "AddItem">{this.state.queue1out}</span><br/>
              <button className="AppBtn" onClick={this.onNextQueue1Click}>
                <img className="btnImg" src={forward} alt="Add"/>
              </button>
            </div>
        </div>
          <div className = "AppPanel">
            <h2>FIFO queue</h2>
            <div className = "ItemBox AppHeader">
              <span className = "AddItem">Add to Queue</span>
              <input className="InputText" id="queue2name" placeholder="next into queue"></input><br/>
              <button className="AppBtn" onClick={this.onBtnAdd2Click}>
                <img className="btnImg" src={addbtn} alt="Add"/>
              </button>
            </div>
            <div className = "AppList">
              {queue2items}
            </div>
            <div className = "ItemBox AppHeader">
              <span className = "AddItem">Pull from Queue:</span>
              <span className = "AddItem">{this.state.queue2out}</span><br/>
              <button className="AppBtn" onClick={this.onNextQueue2Click}>
                <img className="btnImg" src={forward} alt="Add"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QueueUI