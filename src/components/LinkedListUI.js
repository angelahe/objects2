import React from "react";
import linkedlist from "./linkedlist";
import AddNode from "./AddNode";
import DeleteNode from "./DeleteNode";
import addbtn from '../images/add_FFFFFF.png';
import deletebtn from '../images/delete_FFFFFF.png';
import '../styles/Styles140.css';
import forward from "../images/forward2_FFFFFF.png";
import back from "../images/back2_FFFFFF.png";
import start from "../images/start_FFFFFF.png";
import end from "../images/end_FFFFFF.png";


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

  onSubjectDelete = (subject) => {
    if(subject) {
      this.state.SubjectList.deleteNode(subject);
      const currentNode = this.state.SubjectList.head;

      this.setState({
        SubjectList: this.state.SubjectList,
        currentNode: currentNode,
        deleteShow: false
      });
    }
  }

  onSubjectCreate = (subject, amount) => {

    if (this.state.SubjectList.length === 0) {
      this.state.SubjectList.addNode(subject, amount);
      const currentNode = this.state.SubjectList.head;

      this.setState({
        SubjectList: this.state.SubjectList,
        currentNode: currentNode
      });
    }
    else {
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

    }

  onStartClick =() => {
    this.setState({currentNode: this.state.SubjectList.head})
  }

  onBackClick = () => {
    const previousNode = this.state.SubjectList.getPrevious(this.state.currentNode);
    if (previousNode) {
      this.setState({currentNode: previousNode});
    }

  }

  onForwardClick = () => {
    const nextNode = this.state.SubjectList.getNext(this.state.currentNode);
    if (nextNode) {
      this.setState({currentNode: nextNode});
    }
  }

  onEndClick = () => {
    this.setState({currentNode: this.state.SubjectList.tail});
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
                  <div>
                    <span className="DetailText">{this.state.currentNode.subject}{"  "}</span>
                    <span className="DetailText">{this.state.currentNode.amount}</span>

                    <button className="AppBtn" onClick={this.onAddClick}>
                      <img className="btnImg" src={addbtn} alt="Add" onClick={this.onAddClick}/>
                    </button>
                    <button className="AppBtn Delete" onClick={this.onDeleteClick}>
                      <img className="btnImg" src={deletebtn} alt="Delete" onClick={this.onDeleteClick}/>
                    </button>
                    <hr/>
                  </div>
                  <div>
                    <button className="AppBtn" onClick={this.onStartClick}>
                      <img className="btnImg" src={start} alt="Start" onClick={this.onStartClick}/>
                    </button>
                    <button className="AppBtn" onClick={this.onBackClick}>
                      <img className="btnImg" src={back} alt="Back" onClick={this.onBackClick}/>
                    </button>
                    <button className="AppBtn" onClick={this.onForwardClick}>
                      <img className="btnImg" src={forward} alt="Forward" onClick={this.onForwardClick}/>
                    </button>
                    <button className="AppBtn" onClick={this.onEndClick}>
                      <img className="btnImg" src={end} alt="End" onClick={this.onEndClick}/>
                    </button>
                  </div>
                </div>
              : null }
            </div>
          </div>
          <div className = "AppPanel">
            {(this.state.addShow)
            ? <AddNode createClicked = {this.onSubjectCreate}
                         closeClicked = {this.onBtnCloseClick}
              />
            : null }
            {(this.state.deleteShow)
            ? <DeleteNode node = {this.state.currentNode}
                          deleteSubject = {this.onSubjectDelete}
                          closeClicked = {this.onBtnCloseClick}
              />

            :null }
          </div>
        </div>
      </div>
    )
  }

}

export default LinkedListUI;