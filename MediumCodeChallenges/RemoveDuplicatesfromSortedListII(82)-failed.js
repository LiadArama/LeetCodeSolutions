/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

function ListNode(val, next) {
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr) {
  let dummy = new ListNode(); // Dummy node to simplify list creation
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next; // Return the actual head (skip the dummy)
}
/*
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let startPtr = head;
  let endPtr = startPtr;
  let midPtr = endPtr;
  let midPtrVal = midPtr.val;
  while (endPtr.next) {
    endPtr = endPtr.next;
    while (midPtrVal === endPtr.val) {
      midPtr.next = null;
      midPtr = endPtr;
      if (endPtr.next) endPtr = endPtr.next;
      midPtrVal = midPtr.val;
      midPtr.next = null;
      if (!endPtr.next) break;
    }

    midPtr = endPtr;
    midPtrVal = midPtr.val;
    while (startPtr.next && startPtr.next.val != midPtrVal && startPtr.next.next) {
      startPtr = startPtr.next;
    }
    if (!startPtr.next) {
      startPtr = midPtr;
      head = startPtr;
    } else startPtr.next = endPtr;
  }
  if (!startPtr.next && !endPtr.next) head = null;
  return head;
};
*/

// ################################### Solution ###################################
var deleteDuplicates = function (head) {
  if (head === null) {
    return head;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current !== null) {
    while (current.next !== null && current.val === current.next.val) {
      current = current.next;
    }
    if (prev.next === current) {
      prev = prev.next;
    } else {
      prev.next = current.next;
    }
    current = current.next;
  }

  return dummy.next;
};

deleteDuplicates(createLinkedList([1, 2, 2]));
