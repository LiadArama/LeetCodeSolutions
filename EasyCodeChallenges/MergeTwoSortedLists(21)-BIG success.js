/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
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
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let newHead = new ListNode(0, list1.val <= list2.val ? list1 : list2);
  let dummyHead1 = new ListNode(0, list1),
    dummyHead2 = new ListNode(0, list2);

  while (list1 && list2) {
    while (list1 && list2 && list1.val <= list2.val) {
      list1 = list1.next;
      dummyHead1 = dummyHead1.next;
    }
    if (list2 && dummyHead1.val <= list2.val) dummyHead1.next = list2;

    while (list2 && list1 && list2.val <= list1.val) {
      list2 = list2.next;
      dummyHead2 = dummyHead2.next;
    }
    if (list1 && dummyHead2.val <= list1.val) dummyHead2.next = list1;

    if (list1) dummyHead1 = new ListNode(0, list1);
    if (list2) dummyHead2 = new ListNode(0, list2);
  }
  return newHead.next;
};

mergeTwoLists(createLinkedList([1, 2, 4]), createLinkedList([1, 3, 4]));
