import React from 'react';
import closebtn from '../images/close_FFFFFF.png';
import "../styles/Styles140.css";

const AddNode = (props) => {

  function handleCloseClick() {
    props.closeClicked("create");
  }

  function handleAddClick() {
//        console.log("in handleAddClick function");
    const subject = document.getElementById("subject").value;
    const amount = Number(document.getElementById("amount").value);
    props.createClicked(subject, amount);
  }

  return(
    <div>
      <div className = "ItemBox AppHeader">
        <span className= "AddItem">Add Subject</span>
        <button className="AppBtn" onClick={handleCloseClick}>
          <img className="btnImg" src={closebtn} alt="Close"/>
        </button>
      </div>
      <div className = "ItemBox">
        <span className = "DetailText">Subject:</span>
        <input className="InputText" id="subject" autoFocus={true}></input><br/>
        <span className = "DetailText">Amount:</span>
        <input className = "InputText" id="amount" type="number"></input><br/><br/>
        <button className="btnText" onClick={handleAddClick}>Create Account</button>

      </div>
    </div>
  )
}
export default AddNode;