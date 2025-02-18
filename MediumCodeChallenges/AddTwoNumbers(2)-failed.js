/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 *
 * Output: [7,0,8]
 *
 * Explanation: 342 + 465 = 807
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
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

// l1 = [2,4,3], l2 = [5,6,4]
// Expected: [7,0,8]

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);

// ######### Solution ######### //
function addTwoNumbers(l1, l2) {
  let overflow = 0; // if sum is more than 10 - there is an overflow of 1. the overflow cannot be greater than 1 because the highest sum can be 19 (9 + 9 + 1 overflow).
  let l3 = new ListNode(0);
  let l3Head = l3;
  let sum = 0;
  while (l1 !== null || l2 !== null || overflow !== 0) {
    // we need to check if there is an overflow
    sum = overflow + (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0); // In case of a sum nore than 10 it will be calculated in the next iteration
    overflow = parseInt(sum / 10);
    l3.next = new ListNode(sum % 10);
    l3 = l3.next;

    if (l1 !== null) l1 = l1.next; // if l1 is a longer list than l2.
    if (l2 !== null) l2 = l2.next; // if l2 is a longer list than l1.
  }
  return l3Head.next;
}

addTwoNumbersFixed(l1, l2);
