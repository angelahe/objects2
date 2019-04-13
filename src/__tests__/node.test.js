import Node from '../components/node';

describe('Test node class', function() {
  describe('tests creating a new node', function () {
    it('adds a node', () => {
      var node = new Node("Amber", 100);
      expect(node).not.toBe(null);
      expect(node.amount).toBe(100);
      expect(node.subject).toBe("Amber");
      expect(node.next).toBe(null);
    });
  });
});

