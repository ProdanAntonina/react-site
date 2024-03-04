console.log(`3.4.2 3`);
let styles = [`Jazz`, `Blues`];
console.log(styles); // Jazz, Blues

styles.push(`Rock-n-roll`);
console.log(styles); // Jazz, Blues, Rock-n-roll

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = `Classic`;
console.log(styles); // Jazz, Classic, Rock-n-roll

let firstElement = styles.shift();
console.log(firstElement); // Jazz
console.log(styles); // Classic, Rock-n-roll

styles.unshift(`Rap`, `Reggae`);
console.log(styles); // Rap, Reggae, Classic, Rock-n-roll

//Acest cod JavaScript demonstrează manipularea unui array numit `styles` folosind mai multe metode:

//Se afișează array-ul inițial `styles`.
//Se adaugă un nou element, `Rock-n-roll`, la sfârșitul array-ului.
// Se înlocuiește elementul din mijloc cu `Classic`.
// Se elimină primul element din array și se afișează.
//Se adaugă două elemente la începutul array-ului: `Rap` și `Reggae`.

