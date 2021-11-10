let i = 0;
let impares = 0;
let pares = 0;

while (i < 101) {
  console.log(i);
  if (i % 2 == 0) {
    pares = pares + 1;
  }else{
    impares = impares + 1;
  }
  i = i + 1;
}

console.log("La suma de pares es:",pares);
console.log("La suma de impares es:",impares);
