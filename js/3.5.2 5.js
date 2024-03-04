console.log(`3.5.2 5`);

let person = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
};
  
person.contacts.phone = '+37312345678';
delete person.address;
  
console.log(person);
//Acest cod JavaScript definește un obiect numit `person` cu mai multe proprietăți, inclusiv un sub-obiect `contacts` ce conține detalii de contact. 
//Proprietatea `phone` din `contacts` este actualizată, iar apoi proprietatea `address` este ștearsă din `person`. Obiectul modificat este afișat în consolă.