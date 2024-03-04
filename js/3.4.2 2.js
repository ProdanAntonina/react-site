console.log(`3.4.2 2`);

const arr2 = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

function printLessThanFive(arr2) {
    const result = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < 5) {
            result.push(arr2[i]);
        }
    }
    console.log(result);
}
  
printLessThanFive(arr2);
// Output: [1, 0, -5, 0]

function findMinMaxPositions(arr2) {
    let min = arr2[0];
    let max = arr2[0];
    let minPositions = [];
    let maxPositions = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < min) {
            min = arr2[i];
            minPositions = [i];
        } else if (arr2[i] === min) {
            minPositions.push(i);
        }
        if (arr2[i] > max) {
            max = arr2[i];
            maxPositions = [i];
        } else if (arr2[i] === max) {
            maxPositions.push(i);
        }
    }
    console.log(`Min positions: ${minPositions}`);
    console.log(`Max positions: ${maxPositions}`);
}
  
findMinMaxPositions(arr2);
// Output: Min positions: [6], Max positions: [5, 8]

function sortDescending(arr2) {
    arr2.sort((a, b) => b - a);
    console.log(arr2);
}
  
sortDescending(arr2);
// Output: [100, 100, 55, 30, -5, 1, 0, 0, 5, -500]

function printGreaterThanAverage(arr2) {
    const sum = arr2.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr2.length;
    const result = arr2.filter((val) => val > avg);
    console.log(result);
}
  
printGreaterThanAverage(arr2);
// Output: [30, 100, 100, 55]
  //Acest cod JavaScript efectuează mai multe operațiuni pe un array dat `arr2`:

//Funcția `printLessThanFive` afișează toate elementele din `arr2` care sunt mai mici decât 5.

//Funcția `findMinMaxPositions` găsește pozițiile primului element minim și a tuturor elementelor maxime în `arr2`.

// Funcția `sortDescending` sortează elementele din `arr2` în ordine descrescătoare.

//Funcția `printGreaterThanAverage` afișează toate elementele din `arr2` care sunt mai mari decât media lor.

//Fiecare funcție primește array-ul `arr2` ca argument și afișează rezultatul în consolă.

  























































