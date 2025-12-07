function pyramid(char, rows, inverted) {
  let result = "\n";
  const maxWidth = rows * 2 - 1;
  if (!inverted) {
    for (let i = 1; i <= rows; i++) {
      const width = i * 2 - 1;
      const spaces = " ".repeat((maxWidth - width) / 2);
      result += spaces + char.repeat(width);
      if (i !== rows) result += "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      const width = i * 2 - 1;
      const spaces = " ".repeat((maxWidth - width) / 2);
      result += spaces + char.repeat(width);
      if (i !== 1) result += "\n";
    }
  }
  result += "\n";
  return result;
}
//Testing
console.log(pyramid("o", 4, false));
console.log(pyramid("o", 4, true))
