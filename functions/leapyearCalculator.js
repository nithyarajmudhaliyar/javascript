// Year to check
let year = 2024;   // You can change this value for testing

// Function definition
function isLeapYear(y) {
  // Leap year logic
  if (y % 400 === 0) {
    return y + " is a leap year.";
  } else if (y % 100 === 0) {
    return y + " is not a leap year.";
  } else if (y % 4 === 0) {
    return y + " is a leap year.";
  } else {
    return y + " is not a leap year.";
  }
}

// Calling the function
let result = isLeapYear(year);

// Output to console
console.log(result);
