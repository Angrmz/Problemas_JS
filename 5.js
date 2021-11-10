var counter = 0;
for (var i = 0; i <= 100; i ++) {
  if ((i%2) !== 0) {
    counter = counter + 1;
    console.log(i);
  }
}

console.log("La cantidad de impares que existen son:",counter);
