/*
FIFO queue
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2
*/
/***************************************
 // E.g. Queue of People
 // first in the queue will be the
 // first out of the queue
 ***************************************/

class FIFOqueue {

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

  firstFromQueue() {
    if(this.queue.length > 0) {
      const nextOut = this.queue.shift();
      return nextOut;
    }
    else
      return "empty";
  }
}

export default FIFOqueue;