/*
LIFO queue
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5
*/
/***************************************
 // E.g. Sardines - a hide and seek LIFO queue
 // rules: you hide in a closet
 // as others find you, they hide in the
 // closet with you and they push you further in
 // when the game is done and everyone has
 // found you, the last person to find you
 // comes out of the closet first
 ***************************************/


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