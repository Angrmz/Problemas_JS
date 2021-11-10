let num, count = 0;
let flag = 1;

num = prompt("Ingresa un numero:");

while (flag <= num) {
  if (flag % 3 == 0){
    console.log(flag);
    count = count + 1;
  }
  flag = flag + 1;
}

console.log("La cantidad de multiplos de 3, son:", count);
