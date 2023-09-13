//[ 1,4,2,2,5,1,1,4,6,8,6,7,9,10]  Count the occurance of each digit and return objects with value and count
// Define the input array of numbers
const numbers = [1, 4, 2, 2, 5, 1, 1, 4, 6, 8, 6, 7, 9, 10];

// Use the reduce method to create a counting object
const digitCounts = numbers.reduce((countObj, currentNumber) => {
  // Check if the current number is already a property in the countObj
  if (countObj[currentNumber] !== undefined) {
    // If it is, increment the count for that digit by 1
    countObj[currentNumber]++;
  } else {
    // If it's not, initialize the count for that digit to 1
    countObj[currentNumber] = 1;
  }
  // Return the updated countObj for the next iteration
  return countObj;
}, {});

// At this point, digitCounts contains the counts of each digit in the array
console.log(digitCounts);
