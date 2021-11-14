var arreglo = [10];

for (var i = 0; i < 10; i++) {
  var calif = prompt("Ingrese calificacion #" + (i+1) + " :");
  arreglo[i] = calif;
}

var num = prompt("Nota a buscar: ");
for (var i = 0; i < 10; i++) {
  if (num == arreglo[i]) {
    console.log("Nota encontrada");
  }
}
