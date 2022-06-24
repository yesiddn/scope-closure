pi = 3.1416;
console.log(pi);

// Lo que hace javascript:
// var pi;
// pi = 3.1416;
// console.log(pi);

'use strict';
pi = 3.1416; // ReferenceError: pi is not defined
console.log(pi);

function myFunction() {
  'use strict';
  return pi = 3.1416; // error. pi is not defined
}

console.log(myFunction());
