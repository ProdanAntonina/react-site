console.log(`3.4.2 5`);

function convert(fn, array) {
    return array.map(fn);
  }
  
  function square(x) {
    return x * x;
  }
  
  console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]

  //Acest cod JavaScript face două lucruri:
//Definește o funcție numită `convert` care aplică o altă funcție (furnizată ca argument) pe fiecare element al unui array și returnează un nou array cu rezultatele.
//Definește o funcție numită `square` care primește un număr și returnează pătratul acestuia.
//Apelând funcția `convert` cu funcția `square` și un array de numere, se obține un nou array în care fiecare număr este pătratul numărului corespunzător din array-ul original. 
//Acest nou array este apoi afișat în consolă.