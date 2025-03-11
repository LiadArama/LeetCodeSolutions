/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-10^4 <= target <= 10^4
*/

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = left + right - 1;
  while (left != right) {
    if (nums[left] === target) return left;
    if (nums[right] === targer) return right;
    if (nums[mid] === target) return mid;

    // if()

    // if(nums[mid] === target) return mid;
    // if(nums[right] < nums[left]){
    //     if(nums[mid] < target){

    //     }
    // }
  }
  return -1;
};

// console.log("Test started");
// setTimeout(() => console.log("0sec Timer"), 0);
// Promise.resolve("Resolved Promise 1").then(res => console.log(res));
// Promise.resolve("Resolved Promise 2").then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log("Test End");
// const p1 = new Promise(resolve => setTimeout(() => resolve("First!"), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("Second!"), 500));

// Promise.all([p1, p2]).then(console.log); // What is the output?
// arr.flat(Infinity);

// const fun = function () {
//   var a = 10;
// };
// console.log(a);
// fun();
for (let i = 0; i < 1; i++) {
  var b = 10;
}
console.log(b++);

// Step 1: Create the Person constructor
function Person(name) {
  this.name = name;
}

// Step 2: Add a method to Person's prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Step 3: Create the Student constructor
function Student(name, subject) {
  Person.call(this, name); // 👈 Call the Person constructor to set `name`
  this.subject = subject;
}

// Step 4: Link Student's prototype to Person's prototype
Student.prototype = Object.create(Person.prototype);

// Step 5: Restore Student's constructor reference
Student.prototype.constructor = Student;

// Step 6: Add a method to Student's prototype
Student.prototype.study = function () {
  console.log(`${this.name} is studying ${this.subject}`);
};

// ✅ Testing the inheritance
const student1 = new Student("Liad", "JavaScript");
student1.sayHello(); // ✅ "Hello, my name is Liad"
student1.study(); // ✅ "Liad is studying JavaScript"

console.log(student1 instanceof Student); // ✅ true
console.log(student1 instanceof Person); // ✅ true
