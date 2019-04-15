import React from "react";
import LIFOqueue from "./LIFOqueue";
import FIFOqueue from "./FIFOqueue";
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

  render() {
    return(
      <div>
        <h1>Hello from LIFO and FIFO</h1>
      </div>
    )
  }
}

export default QueueUI