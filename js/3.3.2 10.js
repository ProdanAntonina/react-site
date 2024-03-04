console.log(`3.3.2 10`);
let number = prompt("Enter your number:");
for (let j = 0; j < number; j++) {
    if (number % j === 0) {
      console.log(j);
    }
  }
  //Acest cod JavaScript primește un număr de la utilizator și încearcă să afișeze toți divizorii acestuia în consolă. 
  //Totuși, are o eroare logică care va genera o excepție de divizare la zero. 
  //Pentru a corecta aceasta, bucla trebuie să înceapă de la 1, iar condiția if trebuie să verifice dacă numărul este divizibil.
