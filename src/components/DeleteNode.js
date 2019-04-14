import React from 'react';
import '../styles/Styles140.css'
import closebtn from '../images/close_FFFFFF.png';

const DeleteNode = (props) => {

  function handleCloseClick() {
    props.closeClicked("delete");
  }

  function handleDeleteClick() {
    console.log("in handleUpdateClick");
    props.deleteSubject(props.node.subject);
  }

  const subject = props.node.subject;
  const amount = props.node.amount;

  return(
    <div>
      <div className = "ItemBox AppHeader">
        <span className = "AddItem">Delete Account</span>
        <button className="AppBtn" onClick={handleCloseClick}>
          <img className="btnImg" src={closebtn} alt="Close"/>
        </button>
      </div>
      <div className = "ItemBox">
        <span className = "DetailText">Subject:</span>
        <span className = "DetailText">{subject}</span><br/>
        <span className = "DetailText">Amount: </span>
        <span className = "DetailText">{amount}</span><br/>
        <button className="btnText" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )

}
export default DeleteNode;