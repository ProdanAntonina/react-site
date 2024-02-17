console.log(`3.3.2 6`);
let num = prompt(`Enter a number:`);
if (!isNaN(num)) {
  num = Number(num);
  if (num > 0) {
    alert(1);
    console.log(`1`);
  } else if (num < 0) {
    alert(-1);
    console.log(`-1`);
  } else {
    alert(0);
    console.log(`0`);
  }
} else {
  alert(`Error`);
  console.log(`Error`);
}
