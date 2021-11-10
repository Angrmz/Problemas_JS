let i = 1;
let count = 0;

while (i < 101) {
  if ((i % 2 == 0)||(i % 3 == 0)) {
    count = count + 1;
    console.log(i);
  }
  i = i + 1;
}

console.log("La cantidad de multiplos es:",count);
