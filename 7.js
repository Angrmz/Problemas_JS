let count = 0;
let flag = 1;
let Str1 = "";

while (flag == 1) {
  Str1 = prompt("Ingresa una frase:");
  count = count + 1;
  flag = prompt("Ingresa el numero 1 para continuar o cualquier tecla para salir.");
}

console.log("La cantidad de frases introducidas son:", count);
