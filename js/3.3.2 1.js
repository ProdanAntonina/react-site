console.log(`3.3.2 1`);
let n = 1;

switch (n) {
  case 0:
    console.log("Zero");
    break;
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
    break;
  case 6:
    console.log("Six");
    break;
  case 7:
    console.log("Seven");
    break;
  case 8:
    console.log("Eight");
    break;
  case 9:
    console.log("Nine");
    break;
  default:
    console.log(`${n} + is not a digit`);
    break;
}

//În acest exemplu, instrucțiunea switch ia valoarea variabilei n și o potrivește cu diferite cazuri. 
//Dacă se găsește o potrivire, blocul de cod corespunzător este executat și instrucțiunea break este folosită pentru a ieși din instrucțiunea switch. 
//Dacă nu se găsește nicio potrivire, codul din interiorul la case default este executat.