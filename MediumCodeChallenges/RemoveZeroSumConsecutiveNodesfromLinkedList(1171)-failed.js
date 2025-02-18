function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
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

/**
Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of ListNode objects.)

Example 1:
Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

Example 2:
Input: head = [1,2,3,-3,4]
Output: [1,2,4]

Example 3:
Input: head = [1,2,3,-3,-2]
Output: [1]
 

Constraints:

The given linked list will contain between 1 and 1000 nodes.
Each node in the linked list has -1000 <= node.val <= 1000.
 */

let removeZeroSumSubLists = head => {
  // initiate start pointer.
  let dummyHead = head;
  //convert the linked list to array.
  let arrayLL = [];
  let arrayOfIndexes = [];
  while (dummyHead != null) {
    arrayLL.push(dummyHead.val);
    dummyHead = dummyHead.next;
  }
  let startPointer = 0;
  //sum elements from begininng of array.
  let currSum = 0;
  for (let i = 0; i < arrayLL.length; i++) {
    let prevSum = currSum;
    currSum += arrayLL[i];
    while (i < arrayLL.length && currSum < prevSum) {
      prevSum = currSum;
      // found a point where it is decreasing.
      if (currSum === 0) {
        // edge case where starting pointer is at index 0;
        arrayOfIndexes.push([startPointer, i]); // consider adding i === arrayLL.length-1 ? arrayLL.length : i (since splice will ned to original amount of elements of the array)
        startPointer = i + 1;
      } else {
        startPointer = i;
        i++;
        currSum += arrayLL[i];
      }
    }
    //Once we find a point where sum is decresing, raise a flag (meaning we might have a sequence) and keep checking if more elements afterwards decrese the sum.
    //Stop the right side of the window once the sum is stopping decresing OR sum is equal to zero
    // if sum is equal to zero, start summing backwards until it reaches zero again. where the starting point is the latest element where the sum is keep on decreasing or the sum is 0.
  }

  let dummy = new ListNode(undefined, undefined);
  const headOfNewLL = dummy;
  //convert the array back to linkedlist:
  for (let j = 0; j < arrayLL.length; j++) {
    for (let i = 0; i < arrayOfIndexes.length; i++) {
      if (!(j >= arrayOfIndexes[i][0] && j <= arrayOfIndexes[i][1])) {
        dummy.next = new ListNode(arrayLL[j], null);
        dummy = dummy.next;
      }
    }
  }

  return headOfNewLL.next;
};
// const res = removeZeroSumSubLists(createLinkedList([1, 2, 4, -3, -4]));
// console.log(res);

//####################################################################
/*
################################## Solution ####################################################################
*/
let removeZeroSumSubListsCorrectSol = head => {
  let front = new ListNode(0, head);
  start = front;
  let end;
  while (start != null) {
    prefixSum = 0;
    end = start.next;
    while (end !== null) {
      prefixSum += end.val;
      if (prefixSum === 0) start.next = end.next;
      end = end.next;
    }
    start = start.next;
  }
  return front.next;
};

const res = removeZeroSumSubListsCorrectSol(createLinkedList([1, 2, 4, -3, -4]));
const res2 = removeZeroSumSubListsCorrectSol(createLinkedList([1, 2, -3, 3, 1]));

console.log(res);
console.log(res2);
