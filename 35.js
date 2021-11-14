var matriz = [];

for (var i = 0; i < 4; i++) {
  matriz[i] = new Array(5);
}

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) +1;
  }
}

console.log(matriz);
