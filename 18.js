var arreglo = [];
var frase = prompt("Introduzca la frase:");
var letra = prompt("Introduzca la letra:");

for (var i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase()===letra) {
    arreglo.push(i);
  }
}

console.log("Cantidad de letras que aparecen en la frase:",arreglo.length);
