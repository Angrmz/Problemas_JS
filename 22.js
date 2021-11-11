var frase = prompt("Introduzca la frase:");
var linea = "    "

for (var i = 0; i < 5; i++) {
  console.log(linea + frase);
  linea += linea;
}
