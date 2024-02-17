console.log(`3.3.2 8`);
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === null || password === null || username === "" || password === "") {
  alert("Validation Error");
} else if (username === "admin" && password === "admin") {
  alert("Hi!");
} else if (username === "admin") {
  alert("Incorrect password");
} else {
  alert("Incorrect username");
}
console.log(`something`);