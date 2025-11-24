function maskEmail(email) {
  // find the index of "@"
  const atIndex = email.indexOf("@");

  // username part
  const username = email.slice(0, atIndex);

  // domain part
  const domain = email.slice(atIndex);

  // first and last character stay visible
  const first = username[0];
  const last = username[username.length - 1];

  // mask the middle part (username length - 2)
  const masked = "*".repeat(username.length - 2);

  return first + masked + last + domain;
}

// Outside the function
let email = "apple.pie@example.com";

// Output the result
console.log(maskEmail(email));
