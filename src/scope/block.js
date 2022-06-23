function fruits() {
  if (true) {
    var fruit1 = 'Apple'; // var is function scoped
    let fruit2 = 'Orange'; // let is block scoped
    const fruit3 = 'Banana'; // const is block scoped
    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
  // console.log(fruit2); // fruit2 is not defined
  // console.log(fruit3); // fruit3 is not defined
}

fruits();