// variables

var a; // declarando
var b = 'b'; // declarando / asignando
b = 'bb'; // reasignando
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = 'Colombia'; // global | asignación SIN DECLARACIÓN
  console.log(country);
}

countries();
console.log(country);