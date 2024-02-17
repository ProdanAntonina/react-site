console.log(`3.3.2 5`);
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue(`$300`));

// În acest exemplu, funcția extractCurrencyValue ia un șir str ca argument. 
//Metoda .slice este folosită pentru a obține un șirul intreg înafară de primul caracter.
