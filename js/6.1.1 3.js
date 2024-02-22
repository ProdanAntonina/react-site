console.log(`6.1.1 3`);

function factorial(pepe) {
    if (pepe === 0) {
        return 1;
      } else {
        return pepe * factorial(pepe - 1);
      }
}
let rrrr = prompt('Insert Number', '');
console.log(factorial(rrrr));