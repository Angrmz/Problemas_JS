var matriz = [];

for(var i = 0; i < 4; i++) {
    matriz[i] = new Array(5);
}

for(var i=0; i < 4; i++) {
    for(var j = 0; j < 5 ;j++){
        matriz[i][j]= Math.floor(Math.random() * 100) + 1  ;
    }
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

console.log(matriz.sort(sortFunction));
