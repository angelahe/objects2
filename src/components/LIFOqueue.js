/*
LIFO queue
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

*/

class LIFOqueue {

  constructor() {
    this.queue = [];
  }

  addToQueue(name) {
    if(name) {
      this.queue.push(name);
      return true;
    }
    return false
  }

  popFromQueue() {
    if(this.queue.length > 0) {
      const nextOut = this.queue.pop();
      return nextOut;
    }
    else
      return "empty";
  }
}

export default LIFOqueue;