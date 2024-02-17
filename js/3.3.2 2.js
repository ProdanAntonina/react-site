console.log(`3.3.2 2`);
let a = 1;
let b = 10;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`The sum of even numbers in the range [${a}, ${b}] is: ${sum}`);

//În acest exemplu, folosim un loop for pentru a itera numerele din intervalul [a, b]. 
//Pentru fiecare număr, verificăm dacă este par, folosind operatorul (%), iar dacă este, îl adăugăm la variabila sumă.
// În cele din urmă, scoatem variabila sumă în consolă.