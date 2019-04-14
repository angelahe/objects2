import React from "react";
import linkedlist from "./linkedlist";
import AddNode from "./AddNode";
import addbtn from '../images/add_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';
import '../styles/Styles140.css';
import editbtn from "../images/edit_FFFFFF.png";

class LinkedListUI extends React.Component {

  constructor () {
    super()
    this.state = {
      SubjectList: new linkedlist(),
      addShow: false,
      deleteShow: false,
      subjectAsc: true,
      amountAsc: true,
      currentNode: null
    }

  }

  onBtnCloseClick = (closeType) => {
    if (closeType === "create") this.setState ({addShow: false});
    if (closeType === "delete") this.setState ({deleteShow: false});
  }

  onAddClick = () => {
    this.setState ({addShow: true});
  }

  onDeleteClick = () => {
    this.setState ({deleteShow: true});
  }

  onSubjectSort = () => {
    this.setState ({subjectAsc: !this.state.subjectAsc});
  }

  onSubjectSort = () => {
    this.setState ({amountAsc: !this.state.amountAsc});
  }

  onSubjectCreate = (subject, amount) => {

    if (this.state.SubjectList.length === 0) {
      this.state.SubjectList.addNode(subject, amount);
      const currentNode = this.state.SubjectList.head;
      console.log("head is", currentNode);

      this.setState({
        SubjectList: this.state.SubjectList,
        currentNode: currentNode
      });
    }
    else {
      console.log("current node is", this.state.currentNode);
      const index = this.state.SubjectList.indexOf(this.state.currentNode.subject);
      this.state.SubjectList.insertNodeAt(index, subject, amount);
      this.setState({
        SubjectList: this.state.SubjectList,
        currentNode: this.state.SubjectList.nodeAt(index)
      });
    }
    this.setState({
      addShow: false
    })
    console.log(this.state);

  }

  render() {

    return(
      <div>
        <h1>Hello from LinkedList</h1>
        <div className = "AppContainer">
          <div className = "AppPanel">
            <div className = "ItemBox AppHeader">
              <span className = "AddItem">Add Subject</span>
              <button className="AppBtn" onClick={this.onAddClick}>
                <img className="btnImg" src={addbtn} alt="Add"/>
              </button>
            </div>
            <div className = "AppList">
              {(this.state.currentNode !== null)
              ? <div>
                  <h2>{this.state.currentNode.subject}</h2>
                  <h2>{this.state.currentNode.amount}</h2>
                  <button className="AppBtn" onClick={this.onAddClick}>
                  <img className="btnImg" src={editbtn} alt="Add" onClick={this.onAddClick}/>
                  </button>
                  <button className="AppBtn Delete" onClick={this.onDeleteClick}>>
                  <img className="btnImg" src={deletebtn} alt="Add" onClick={this.onDeleteClick}/>
                  </button>
                </div>
              : null}

            </div>
          </div>
          <div className = "AppPanel">
            {(this.state.addShow)
            ? <AddNode createClicked = {this.onSubjectCreate}
                         closeClicked = {this.onBtnCloseClick}
              />
            : null
            }
            {(this.state.deleteShow)
            ? <h1>show delete dialog</h1>
            :null
            }
          </div>
        </div>
      </div>
    )
  }

}

export default LinkedListUI;