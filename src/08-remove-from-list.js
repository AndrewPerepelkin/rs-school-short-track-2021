/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const getCopyOfList = (l) => ({ ...l });

let head = null;
const getUpdatedList = (prevNode, list, k) => {
  const l = list;
  const prev = prevNode;
  if (l === null) {
    if (prev) {
      return prev;
    }
    return null;
  }
  if (l.value === k) {
    if (prev) {
      prev.next = l.next;
    } else {
      head = l.next;
    }
    return getUpdatedList(prev, head, k);
  }
  return getUpdatedList(l, l.next, k);
};

function removeKFromList(l, k) {
  const list = getCopyOfList(l);
  getUpdatedList(null, list, k);
  return head;
}

module.exports = removeKFromList;
