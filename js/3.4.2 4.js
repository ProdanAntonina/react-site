console.log(`3.4.2 4`);

function sumInputNumbers() {
    let numbers = [];
    while (true) {
        let input = prompt('Insert Number', '');
        if (input === null || input === '' || !isFinite(input)) {
            break;
      }
        numbers.push(+input);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

let result = sumInputNumbers();
console.log(result);
  //Acest cod JavaScript definește o funcție numită sumInputNumbers() care solicită utilizatorului să introducă numere până când introducerea este invalidă sau anulată. 
  //Apoi, funcția calculează și returnează suma numerelor introduse. Suma este afișată în consolă.




