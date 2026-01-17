// Printing 5 to 1 using Recursions
const recursiveCountdown = (number) => {
  if (number < 1) {
    return;
  }
  console.log(number);
  recursiveCountdown(number - 1);
};
recursiveCountdown(5);

// Printing 1 to 5 using Recursions
const recursiveCountdown = (number) => {
  if (number < 1) {
    return;
  }
  console.log(number);
  recursiveCountdown(number - 1);
};
recursiveCountdown(5);
