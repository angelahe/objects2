/**********************************************/
//
//  Implementation based on solution from freecodecamp
//  https://www.youtube.com/watch?v=9YddVVsdG5A
//
/**********************************************/

import Node from '../components/node';

class linkedlist {

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.length = 0;
  }

  size() {
    return this.length
  }

  getFirst() {
    return this.head
  }

  getLast() {
    return this.tail
  }

  getNext(node) {
    if(node) {
      return node.next
    }
    else
      return null
  }

  getPrevious(node) {
    if(node) {
      let currentNode = this.head;
      let previousNode;
      const subject = node.subject;

      if (currentNode.subject === subject) {
        if (previousNode) {
          return previousNode
        }
      } else {
        while (currentNode.subject !== subject) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        if(currentNode.subject === subject) {
          return previousNode
        }
        else
          console.log("node not found");
      }
      return null
    }
    else return null
  }

  getTotal() {
    let total = 0;
    let currentNode = this.head;

    while(currentNode) {
      total+=currentNode.amount;
      currentNode = currentNode.next;
    }
    return(total)
  }

  //adds node to end of linked list
  addNode(subject, amount) {
    let node = new Node(subject, amount);

    if(this.head===null) {
      this.head = node;
      this.tail = node;
    }
    else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.tail = node;
    }
    this.length++
  };

  //deletes the first node with a matching subject from the linked list
  //returns null if fails, returns 0 on successful deletion

  deleteNode(subject) {
    let currentNode = this.head;
    let previousNode;

    if (subject === null || subject === {}) return null;

    if (currentNode.subject === subject) {
      this.head = currentNode.next;
    } else {
      while (currentNode.subject !== subject) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;

      if (previousNode.next === null) {
        this.tail = previousNode;
      }
    }
    this.length--;
    return 0;
  };

  isEmpty() {
    return this.length === 0;
  };

  indexOf(subject) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.subject === subject) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  nodeAt(index) {
    let currentNode = this.head;
    let count = 0;
    while(count < index) {
      count++
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  //inserts node before the position at index
  insertNodeAt(index, subject, amount) {
    const node = new Node(subject, amount);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if(index > this.length-1) {
      return null;
    }

    if(index === 0) {
      node.next = currentNode;
      this.head = node;
      if (node.next === null)
        this.tail = node;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
    return 0;
  }

  //returns null for fail, 0 for successful deletion of note at position 'index'
  //0 is the first position in the linked list
  deleteNodeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if(index < 0 || index >= this.length) {
      return null;
    }
    if(index === 0) {
      this.head = currentNode.next;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
      if (previousNode.next === null) {
        this.tail = previousNode;
      }
    }
    this.length--;
    return 0
  }

}
export default linkedlist