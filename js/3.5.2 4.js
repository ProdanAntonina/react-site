console.log(`3.5.2 4`);

const user1 = {
    name: `User 1`,
    age: 123,
};
  
const user2 = { ...user1 };
user2.name = `User 2`;
user2.age = 321;
  
console.log(user1);
console.log(user2);
  //Acest cod demonstrează crearea unei copii independente a unui obiect user1 în user2 folosind spread operatorul (...). 
  //Apoi, proprietățile obiectului user2 sunt actualizate. Cele două obiecte sunt afișate în consolă pentru a evidenția diferența dintre ele.





