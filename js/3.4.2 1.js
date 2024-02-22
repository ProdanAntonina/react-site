console.log(`3.4.2 1`);
let arr = [1, 2, 3, 4, 5];

for (let o = 0; o < arr.length; o++) {
console.log(arr[o]);
}

let p = 0;
while (p < arr.length) {
  console.log(arr[p]);
  p++;
}

for (const index in arr) {
    console.log(arr[index]);
}

for (const element of arr) {
    console.log(element);
  }
  
arr.forEach((element) => {
    console.log(element);
});
  

arr.map((element) => {
    console.log(element);
});
  