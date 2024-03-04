console.log(`3.3.2 9`);
let name = prompt("Enter your name:");
alert(`Hi ${name}`);

let isJS = confirm("Are you familiar with the JavaScript language?");

if (isJS) {
  alert("Good Boy");
} else {
  alert("You can start learning right now");
}
console.log(`smth`);
//Prima fereastră modală, generată de prompt("Enter your name:"), solicită utilizatorului să introducă numele său. Numele introdus este stocat în variabila name.
//Apoi, un mesaj de alertă este afișat utilizatorului, salutându-l cu numele introdus. Se utilizează interpolarea șirurilor (${name}) pentru a afișa numele introdus în mesajul de salut.
//A doua fereastră modală, generată de confirm("Are you familiar with the JavaScript language?"), solicită utilizatorului să răspundă la o întrebare binară. Dacă utilizatorul apasă butonul "OK", variabila isJS va fi setată la true, altfel va fi setată la false.
//În funcție de valoarea variabilei isJS, este afișat un mesaj de alertă diferit. Dacă utilizatorul este familiarizat cu limbajul JavaScript, este afișat mesajul "Good Boy", altfel este afișat mesajul "You can start learning right now".
//La final, se afișează mesajul "smth" în consolă, utilizând console.log(). Acest mesaj nu interacționează cu utilizatorul și este afișat direct în consolă.