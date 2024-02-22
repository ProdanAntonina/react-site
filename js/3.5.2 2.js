console.log(`3.5.2 2`);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
let suma = 0;
  
for (let key in salaries) {
    suma += salaries[key];
}
  
console.log(suma); // 390
  