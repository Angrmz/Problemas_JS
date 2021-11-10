var n1 = 0;
var n2 = 0;
var aux = 0;
var num = 0;
var pares = 0;
var impares = 0;

n1 = prompt("Numero 1:");
n2 = prompt("Numero 2:");

if (n1 > n2) {
  aux = n1;
  n1 = n2;
  n2 = aux;
}

while (n1 <= n2) {
  console.log(n1);
  num = num + 1;
  if (n1 % 2 == 0) {
    pares = pares + 1;
  }else {
    impares = impares + 1;
  }
  n1 = n1 + 1;
}

console.log("Cantidad de numeros:", num);
console.log("Cantidad de pares:", pares);
console.log("La suma de impares es:", impares);
