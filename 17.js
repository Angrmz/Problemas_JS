let num1 = 0;
let num2 = 0;
let aux = 0;
let counter = 0;
let flag = 0;

num1 = prompt("Ingrese primer numero:");
num2 = prompt("Ingrese segundo numero:");

if (num2 < num1) {
  aux = num2;
  num2 = num1;
  num1 = aux;
}

while (num1 <= num2) {
  if (num1 % 2 ==0) {
    console.log(num1);
    counter++;
    flag += num1;
  }
  num1++;
}

console.log("La cantidad de multiplos es:", counter);
console.log("La suma de multiplos es:", flag);
