import linkedlist from '../components/linkedlist';

describe('Test linked list class', function() {
  describe('get nulls when list is empty for functions', () => {
    it('tests empty list and empty nodes for functions', () => {
      const list = new linkedlist();
      expect(list).not.toBe(null);
      expect(list.size()).toBe(0);
      expect(list.length).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.current).toBe(null);
      expect(list.getFirst()).toBe(null);
      expect(list.getLast()).toBe(null);
      expect(list.getNext(list.head)).toBe(null);
      expect(list.getPrevious(list.tail)).toBe(null);
    });
  })
  describe('add nodes and check for first and last', () => {
    it('adds first node to a linked list', () => {
      const list = new linkedlist();
      expect(list).not.toBe(null);
      list.addNode("Kitten", 100);
      expect(list.head).toEqual({"amount": 100, "next": null, "subject": "Kitten"});
      expect(list.tail).toEqual({"amount": 100, "next": null, "subject": "Kitten"});
      expect(list.current).toEqual({"amount": 100, "next": null, "subject": "Kitten"});
      expect(list.length).toBe(1);
    });
    it('test list - head, tail, next, previous',  () => {
      const conga = new linkedlist();
      expect(conga).not.toBe(null);
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      expect(conga.length).toBe(3);
      expect(conga.size()).toBe(3);
      expect(conga.getFirst().subject).toEqual("Kitten");
      expect(conga.getLast().subject).toEqual("Chick");
      expect(conga.head.next.subject).toEqual("Puppy");
      expect(conga.tail.next).toEqual(null);
      expect(conga.head.next.next.subject).toEqual("Chick");
      //expect getting previous of head to be null
      expect(conga.getPrevious(conga.head)).toBe(null);
      expect(conga.getPrevious(conga.tail).subject).toBe("Puppy");
      expect(conga.getPrevious(conga.head.next)).toBe(conga.head);
    });
  });
  describe('tests getTotal', () => {
    it('gets the correct sum of all amounts in the list',  () => {
      const conga = new linkedlist();
      expect(conga.getTotal()).toBe(0);
      conga.addNode("Kitten", 100);
      expect(conga.getTotal()).toBe(100);
      conga.addNode("Puppy", 200);
      expect(conga.getTotal()).toBe(300);
      conga.addNode("Chick", 300);
      expect(conga.getTotal()).toBe(600);
    });
  });
  describe('tests deleteNode', () => {
    it('deletes a middle node', () => {
      const conga = new linkedlist();
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      expect(conga.deleteNode(conga.head.next.subject)).toBe(0);
      expect(conga.head.subject).toBe("Kitten");
      expect(conga.head.next.subject).toBe("Chick");
    });
    it('deletes the tail node', () => {
      const conga = new linkedlist();
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      expect(conga.deleteNode(conga.tail.subject)).toBe(0);
      expect(conga.length).toBe(2);
      expect(conga.head.subject).toBe("Kitten");
      expect(conga.head.next.subject).toBe("Puppy");
      expect(conga.head.next.next).toBe(null);
      expect(conga.tail.subject).toBe("Puppy");
    });
    it('deletes the head node', () => {
      const conga = new linkedlist();
      expect(conga).not.toBe(null);
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      expect(conga.deleteNode("Kitten")).toBe(0);
      expect(conga.head.subject).toBe("Puppy");
      expect(conga.head.next.subject).toBe("Chick");

    });
    it('deletes the node with the matching subject', () => {
      const conga = new linkedlist();
      expect(conga).not.toBe(null);
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
    })
    it('delete returns null with an empty list', () => {
      var conga = new linkedlist();
      expect(conga.deleteNode(conga.head)).toBe(null);
    });
    it('deletes the node at the 1st, last and a mid-position', () => {
      const conga = new linkedlist();
      //returns null when attempt to delete from an empty linked list
      expect(conga.deleteNodeAt(1)).toBe(null);
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      conga.addNode("Flower", 300);
      conga.addNode("Bunny", 300);
      //delete first node
      expect(conga.deleteNodeAt(0)).toBe(0);
      expect(conga.length).toBe(4);
      expect(conga.head.subject).toBe("Puppy");
      //delete last node
      expect(conga.deleteNodeAt(3)).toBe(0);
      expect(conga.length).toBe(3);
      expect(conga.tail.subject).toBe("Flower");
      expect(conga.nodeAt(2).subject).toBe("Flower");
      expect(conga.nodeAt(3)).toBe(null);
      //delete middle node
      expect(conga.deleteNodeAt(1)).toBe(0);
      expect(conga.nodeAt(1).subject).toBe("Flower");
    });
    it('adds a new node at the 1st, middle, and last position', () => {
      const conga = new linkedlist();
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      //add node before head of list
      expect(conga.insertNodeAt(0, "Bunny", 100)).toBe(0);
      expect(conga.head.subject).toBe("Bunny");
      expect(conga.head.next.subject).toBe("Kitten");
      //add node in the middle
      expect(conga.insertNodeAt(1, "Bug", 500)).toBe(0);
      expect(conga.nodeAt(1).subject).toBe("Bug");
      expect(conga.nodeAt(2).subject).toBe("Kitten");
      //add node at the last node
      expect(conga.insertNodeAt(conga.length-1, "Flower", 200)).toBe(0);
      expect(conga.length).toBe(6);
      expect(conga.tail.subject).toBe("Chick");
      expect(conga.getPrevious(conga.tail).subject).toBe("Flower");
      //expect if try to add to the end, returns null, use addNode instead
      expect(conga.insertNodeAt(conga.length, "Oopsie", 100)).toBe(null);
    })
    it('checks if the list is empty', () => {
      const conga = new linkedlist();
      expect(conga.isEmpty()).toBe(true);
      conga.addNode("Kitten", 100);
      expect(conga.isEmpty()).toBe(false);
    })
    it('returns the position of the item given a subject', () => {
      const conga = new linkedlist();
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      expect(conga.indexOf(conga.head.subject)).toBe(0);
      expect(conga.indexOf("Puppy")).toBe(1);
      expect(conga.indexOf(conga.tail.subject)).toBe(2);
    });
    it('returns the node at the given position', () => {
      const conga = new linkedlist();
      conga.addNode("Kitten", 100);
      conga.addNode("Puppy", 200);
      conga.addNode("Chick", 300);
      expect(conga.nodeAt(0).subject).toBe(conga.head.subject);
      expect(conga.nodeAt(conga.length-1).subject).toBe(conga.tail.subject);
      expect(conga.nodeAt(1).subject).toBe(conga.head.next.subject);
    })
  });

});

