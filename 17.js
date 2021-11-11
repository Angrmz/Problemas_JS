let res = "S";

while (res = "S") {
  let c = 0;
  let sum = 0;
  let num1 = 0;
  let num2 = -999;
  num1 = prompt("Numero:");
  num2 = prompt("Numero mayor que el anterior:");

  num1 = num1 + 1;
  while (num1 <= (num2 - 1)) {
    if (num1 % 2 == 0) {
      console.log(num1);
      c = c + 1;
      sum = sum + num1;
    }
    num1 = num1 + 1;
  }
  console.log("Numero de multiplos de 2:", c);
  console.log("La suma es:", sum);

  while (res == "S" && res == "N") {
    res = console.log("Escribir otra serie de numeros(S/N)");
  }
}
