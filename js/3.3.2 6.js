console.log(`3.3.2 6`);
let num = prompt(`Enter a number:`);
if (!isNaN(num)) {
  num = Number(num);
  if (num > 0) {
    alert(1);
    console.log(`1`);
  } else if (num < 0) {
    alert(-1);
    console.log(`-1`);
  } else {
    alert(0);
    console.log(`0`);
  }
} else {
  alert(`Error`);
  console.log(`Error`);
}
//Acest cod JavaScript primește un număr de la utilizator prin intermediul unei ferestre prompt. După ce utilizatorul introduce un număr, codul verifică dacă acesta este un număr valid (adică nu este un șir de caractere ne-numeric).

//Dacă numărul este valid, acesta este convertit într-un număr de tip numeric și apoi verificat:
//Dacă numărul este mai mare decât zero, se afișează un mesaj de alertă și se afișează valoarea 1 în consolă.
//Dacă numărul este mai mic decât zero, se afișează un mesaj de alertă și se afișează valoarea -1 în consolă.
//Dacă numărul este zero, se afișează un mesaj de alertă și se afișează valoarea 0 în consolă.
//Dacă utilizatorul introduce un șir de caractere ne-numeric sau apasă butonul "Cancel", se afișează un mesaj de eroare într-o fereastră de alertă și se afișează mesajul "Error" în consolă.
//În cele din urmă, mesajele afișate în consolă sunt afișate folosind console.log().
