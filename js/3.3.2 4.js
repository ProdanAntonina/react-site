console.log(`3.3.2 4`);
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst(`admin`));

// În acest exemplu, funcția ucFirst ia un șir str ca argument. 
//Metoda charAt este folosită pentru a obține primul caracter al șirului, 
//care este apoi convertit în majuscule folosind metoda toUpperCase. 
//Restul șirului se obține prin metoda slice. În cele din urmă, 
//primul caracter modificat și restul șirului sunt concatenate folosind operatorul + și returnate ca rezultat.  