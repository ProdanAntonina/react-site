console.log(`3.4.2 3`);
let styles = [`Jazz`, `Blues`];
console.log(styles); // Jazz, Blues

styles.push(`Rock-n-roll`);
console.log(styles); // Jazz, Blues, Rock-n-roll

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = `Classic`;
console.log(styles); // Jazz, Classic, Rock-n-roll

let firstElement = styles.shift();
console.log(firstElement); // Jazz
console.log(styles); // Classic, Rock-n-roll

styles.unshift(`Rap`, `Reggae`);
console.log(styles); // Rap, Reggae, Classic, Rock-n-roll
