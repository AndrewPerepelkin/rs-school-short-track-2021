const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.state = null;
    this.last = null;
    this.stateSize = 0;
  }

  get size() {
    return this.stateSize;
  }

  enqueue(element) {
    const node = new ListNode(element);
    const newNode = { ...node, value: element };
    if (this.state && (this.stateSize === 1)) {
      this.last = newNode;
      this.state.next = this.last;
    } else if (this.state && (this.stateSize > 1)) {
      this.last.next = newNode;
      this.last = this.last.next;
    } else {
      this.state = newNode;
      this.last = this.state;
    }
    this.stateSize++;
  }

  dequeue() {
    const first = this.state.value;
    this.state = this.state.next;
    this.stateSize--;
    return first;
  }
}

module.exports = Queue;
