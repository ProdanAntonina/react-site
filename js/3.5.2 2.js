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
  //Acest cod JavaScript definește un obiect numit `salaries` care conține salariile a trei persoane. 
  //Apoi, se calculează suma tuturor salariilor folosind un ciclu `for...in` pentru a itera prin fiecare cheie din obiect și adăugând valoarea corespunzătoare la o variabilă numită `suma`. 
  //În final, suma calculată este afișată în consolă, care este 390 în acest caz.