console.log(`3.5.2 3`);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
  //Acest cod JavaScript definește o funcție numită multiplyNumeric care primește un obiect ca argument.
  // Funcția iterează prin fiecare cheie din obiect și verifică dacă valoarea corespunzătoare este de tipul number. 
  //Dacă da, valoarea este înmulțită cu 2. Cu toate acestea, funcția nu returnează nimic, ci doar modifică obiectul dat în loc.



