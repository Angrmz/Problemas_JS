var pares = 0;
var impares = 0;

for (var i = 1; i < 1000; i++) {
  if (i % 2 == 0) {
    pares += i;
  }else {
    impares += i;
  }
}

console.log("La suma de los pares es:", pares);
console.log("La suma de los impares es:", impares);
