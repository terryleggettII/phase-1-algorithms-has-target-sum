function hasTargetSum(array, target) {
  // Creates a set to keep track of numbers we've seen
  const seenNumbers = new Set();

  // Loops through each number in the array
  for (const num of array) {
    const complement = target - num;
    // If the complement exists in the set, return true
    if (seenNumbers.has(complement)) {
      return true
    }
    // Add the current number to the set
    seenNumbers.add(num)
  }
    // Return flase if no pair is found
    return false
  }


/* 
  Write the Big O time complexity of your function here
*/
  // O(n)
/* 
  Add your pseudocode here
*/
  // 1. Create an empty array set called seenNumbers
  // 2. Iterate through each number in the array:
  //  - Calculate the component (i.e., target - num)
  //  - If the complement exists in seenNumbers, return true.
  //  - Otherwise, add the current number to seenNumbers.
  // 3. If no pair is found after checking all numbers, return false.
/*
  Add written explanation of your solution here
*/
  // The goal is to create a function that checks if any numbers
  // in a given array add up to a target number. If such a pair exists,
  // the function should return true; otherwise, it should return false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
