var arreglo = [10];

for (var i = 0; i < 10; i++) {
  var calif = prompt("Ingrese calificacion #" + (i+1) + " :");
  arreglo[i] = calif;
}

arreglo.sort((a , b) => a -b);
let lowMiddle = Math.floor((arreglo.length - 1) / 2);
let highMiddle = Math.ceil((arreglo.length - 1) / 2);
var median = (arreglo[lowMiddle] + arreglo[highMiddle]) / 2;

console.log(median);
