function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }
  return true;
}
// testing
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["voodoo", "no"]))
console.log(mutation(["ate", "date"]))
console.log(mutation(["Tiger", "Zebra"]))
