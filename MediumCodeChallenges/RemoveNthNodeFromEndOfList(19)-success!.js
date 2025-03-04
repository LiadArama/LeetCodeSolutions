/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
Constrainss:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
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

var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(0, head);
  let start = dummyHead,
    end = dummyHead;
  for (let i = 0; i < n; i++) end = end.next;
  while (end.next) {
    start = start.next;
    end = end.next;
  }

  let nodeToDel = start.next;
  start.next = !start.next.next ? null : start.next.next;

  delete nodeToDel;
  return dummyHead.next;
};

removeNthFromEnd(createLinkedList([1, 2, 3, 4, 5, 6]), 6);
