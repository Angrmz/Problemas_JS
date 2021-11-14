var matriz = new Array(4);
var matriz1 = new Array(5);

for (var i = 0; i < 4; i++) {
  matriz[i] = new Array(5);
}

for (var i = 0; i < 5; i++) {
  matriz1[i] = new Array(4);
}

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 5; j++){
        let rand = Math.floor(Math.random() * 100) + 1;
        matriz[i][j] = rand;
        matriz1[j][i] = rand;
   }
}

console.log("\nMatriz: \n");
console.log(matriz);
console.log("\nMatriz transpuesta: \n");
console.log(matriz1);
