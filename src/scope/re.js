var firstName; // declaration undefined
firstName = 'Duvan'; // assignment
console.log(firstName);

var lastName = 'Yesid'; // declaration and assignment
lastName = 'Jess'; // reassignment
console.log(lastName);

var secondName = 'Yesid'; // declaration and assignment
var secondName = 'Jess'; // redeclaration
console.log(secondName);


// Let
let fruit = 'Apple'; // declaration and assignment
fruit = 'Banana'; // reassignment
console.log(fruit);
// let fruit = 'Apple'; // Cannot redeclare a let variable


// Const
const animal = 'Cat'; // declaration and assignment
// animal = 'Dog'; // Cannot reassign a const variable
// const animal = 'Dog'; // Cannot redeclare a const variable
console.log(animal);

// Los arreglos se pueden mutar más no se puede cambiar el tipo de dato, por ejemplo a un string
const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);